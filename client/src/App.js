import {useState, useEffect} from "react"
import './index.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask"
import React from 'react'
import Button from "./components/Button"
require('dotenv').config()
const port = process.env.PORT

function App() {
		const [showAddTask, setShowAddTask] = useState(false)

	useEffect(() => {
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
				setTasks([...tasks, ...data])
			} catch (e) {
				console.log('json error')
				console.log(e)
			}
		}

		getData()
	}, [])

	//tasks is now available globally
	const [tasks, setTasks] = useState([
		{
			id: 1,
			title: 'todo1',
			body: 'mustdothis',
			checked: false
		},
		{
			id: 2,
			title: 'todo2',
			body: 'mustdothis2',
			checked: true
		},
		{
			id: 3,
			title: 'todo3',
			body: 'mustdothis3',
			checked: false
		},
		{
			id: 4,
			title: 'todo4',
			body: 'mustdothis4',
			checked: false
		}
	])

	const toggleShowAddTask = () => {
		setShowAddTask(!showAddTask)
	}

	const addTask = (task) => {
		task.id = tasks.length + 1
		setTasks([...tasks, task])
		console.log(task)
		console.log(tasks)
	}
	//deletes the task
	const deleteTask = (id) => {
		console.log('delete ', id)
		setTasks(tasks.filter((task) => {
			return task.id !== id
		}))
	}

	const taskToggleCheckbox = (id) => {
		let arr = [...tasks]
		let obj = tasks.find((task) => {
			return task.id === id
		})
		arr[tasks.indexOf(obj)].checked = !arr[tasks.indexOf(obj)].checked
		setTasks(arr)
	}

	return (
		<div className="container">
			<Header title='hello' toggleShowAddTask={toggleShowAddTask} showAddTask={showAddTask}/>
			{/*{<AddTask onAdd={addTask}/>}*/}
			{showAddTask ? (<AddTask onAdd={addTask}/>) : ''}
			{tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} toggleCheck={taskToggleCheckbox}/>) : (<p>No tasks</p>)}
			{/*{getData()}*/}
			<Button onClick={() => console.log('clicked')}/>

		</div>

	)
}


// class App extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<Header/>
// 			</div>
// 		)
// 	}
// }
export default App;
