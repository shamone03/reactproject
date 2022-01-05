import {useEffect, useState} from 'react'
// import './index2.css'
import Header from './Header'
import Tasks from './Tasks'
import AddTask from './AddTask'
import {
    addTaskController,
    deleteTaskController,
    getTasksController,
    taskToggleController
} from '../controllers/controller'
import jwt from 'jsonwebtoken'
import {Navigate} from "react-router-dom";
import {verifyUser} from "../controllers/userController";

require('dotenv').config()


function Home() {
    const [showAddTask, setShowAddTask] = useState(false)
    //tasks is now available globally
    const [tasks, setTasks] = useState([])
    //variable to update the DOM, sometimes does it twice, too bad
    const [render, setRender] = useState(false)
    const [verified, setVerified] = useState(false)
    // const [username, setUsername] = useState('')
    // const username = jwt.decode(localStorage.getItem('token')).username


    useEffect(() => {
        const fetchData = async () => {
            setTasks(await getTasksController())
            setVerified(await protectComponent())
        }
        fetchData()
        

        // setUsername(jwt.decode(localStorage.getItem('token')).username)
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

    const taskToggleCheckbox = async (id) => {
        let arr = [...tasks]
        let obj = tasks.find((task) => {
            return task._id === id
        })
        await taskToggleController(id, !arr[tasks.indexOf(obj)].done)
        arr[tasks.indexOf(obj)].done = !arr[tasks.indexOf(obj)].done
        setTasks(arr)
    }

    const protectComponent = async () => {
        if (!localStorage.hasOwnProperty('token')) {
            return true
        }
        return !(await verifyUser())

    }

    return (

        <div className="container">
            {verified ? (<Navigate to={'/login'}/>) : ''}
            {localStorage.hasOwnProperty('token') ? (<h1>{jwt.decode(localStorage.getItem('token')).username}</h1>) : (
                <p>not logged in</p>)}
            <Header title='hello' toggleShowAddTask={toggleShowAddTask} showAddTask={showAddTask}/>
            {showAddTask ? (<AddTask onAdd={addTask}/>) : ''}
            {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} toggleCheck={taskToggleCheckbox}/>) : (
                <p>No tasks</p>)}

        </div>

    )
}

export default Home
