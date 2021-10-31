import React, {useEffect, useState} from "react"
import './index.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask"
import Button from "./components/Button"
import {addTaskController} from "./controllers/controller"

require('dotenv').config()


function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    //tasks is now available globally
    const [tasks, setTasks] = useState([])
    //variable to update the DOM, sometimes does it twice, too bad
    const [render, setRender] = useState(false)

    useEffect(async () => {
        const getData = async () => {
            try {

                const res = await fetch(`/tasks`, {
                    method: 'GET',
                    cors: 'same-origin',
                    headers: {
                        'Origin': `/`,
                        'Content-Type': 'application/json'
                    }
                })
                const data = await res.json()
                console.log(data)
                setTasks([...data])
            } catch (e) {
                console.log('json error')
                console.log(e)
            }
        }

        await getData()
    }, [render])

    const toggleShowAddTask = () => setShowAddTask(!showAddTask)

    const addTask = async (task) => {
        console.log(tasks)
        console.log(await addTaskController(task))
        // if (await addTaskController(task) === true) {
        // 	setTasks([...tasks, task])
        // 	setRender(!render)
        // }


        fetch('/tasks', {
            method: 'POST',
            cors: 'same-origin',
            headers: {
                'Origin': `/`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        }).then(res => {
            res.json()
        }).then(result => {
            console.log(result)
            setTasks([...tasks, task])
            setRender(!render)
        }).catch(err => {
            console.log(err)
        })

    }

    //deletes the task
    const deleteTask = async (id) => {

        fetch('/tasks', {
            method: 'DELETE',
            cors: 'same-origin',
            headers: {
                'Origin': `/`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({_id: id})
        }).then(res => {
            res.json()
        }).then(data => {
            console.log(data)
            setRender(!render)
        })

        console.log('deleted ', id)
        setTasks(tasks.filter((task) => {
            return task._id !== id
        }))
    }

    const taskToggleCheckbox = (id) => {
        let arr = [...tasks]
        let obj = tasks.find((task) => {
            // task._id === id ? console.log(task) : ''
            return task._id === id
        })
        arr[tasks.indexOf(obj)].done = !arr[tasks.indexOf(obj)].done
        setTasks(arr)
    }

    return (
        <div className="container">
            <Header title='hello' toggleShowAddTask={toggleShowAddTask} showAddTask={showAddTask}/>
            {/*{<AddTask onAdd={addTask}/>}*/}
            {showAddTask ? (<AddTask onAdd={addTask}/>) : ''}
            {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} toggleCheck={taskToggleCheckbox}/>) : (
                <p>No tasks</p>)}
            {/*{getData()}*/}
            <Button onClick={() => console.log('clicked')}/>

        </div>

    )
}

export default App;
