import React, {useEffect, useState} from "react"
import {Route, StaticRouter, Switch} from "react-router-dom"
// import './index.css'
import './index2.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask"
import Register from './components/Register'
import {addTaskController, deleteTaskController, getTasksController} from "./controllers/controller"

require('dotenv').config()


function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    //tasks is now available globally
    const [tasks, setTasks] = useState([])
    //variable to update the DOM, sometimes does it twice, too bad
    const [render, setRender] = useState(false)

    useEffect(async () => {
        const data = await getTasksController()
        setTasks(data)
    }, [render])

    const toggleShowAddTask = () => setShowAddTask(!showAddTask)

    const addTask = async (task) => {
        console.log(tasks)
        if (await addTaskController(task) === true) {
            setTasks([...tasks, task])
            setRender(!render)
        }
    }

    const deleteTask = async (id) => {

        console.log(tasks)
        if (await deleteTaskController(id)) {
            setRender(!render)
            console.log('deleted ', id)
        }

    }

    const taskToggleCheckbox = (id) => {
        let arr = [...tasks]
        let obj = tasks.find((task) => {
            return task._id === id
        })
        arr[tasks.indexOf(obj)].done = !arr[tasks.indexOf(obj)].done
        setTasks(arr)
    }

    return (
        <StaticRouter>
            <div className="container">
                <Switch>
                    <Route path={'/register'} component={Register}/>
                </Switch>
                <Header title='hello' toggleShowAddTask={toggleShowAddTask} showAddTask={showAddTask}/>
                {showAddTask ? (<AddTask onAdd={addTask}/>) : ''}
                {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} toggleCheck={taskToggleCheckbox}/>) : (
                    <p>No tasks</p>)}

            </div>
        </StaticRouter>

    )
}

export default App
