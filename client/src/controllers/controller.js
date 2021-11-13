const addTaskController = async (task) => {
    if (!localStorage.hasOwnProperty('token')) {
        return false
    }
    const res = await fetch('/api/tasks/add', {
        method: 'PUT',
        cors: 'same-origin',
        headers: {
            'Origin': `/`,
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify(task)
    })
    return res.status === 200
    
}

const deleteTaskController = async (id) => {
    if (!localStorage.hasOwnProperty('token')) {
        return false
    }
    const res = await fetch('/api/tasks', {
        method: 'DELETE',
        cors: 'same-origin',
        headers: {
            'Origin': `/`,
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({_id: id})
    })

    return res.status === 200

}

const getTasksController = async () => {
    if (!localStorage.hasOwnProperty('token')) {
        return false
    }
    const res = await fetch(`/api/tasks`, {
        method: 'GET',
        cors: 'same-origin',
        headers: {
            'Origin': `/`,
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    })
    return await res.json()
}

const taskToggleController = async (id, done) => {
    if (!localStorage.hasOwnProperty('token')) {
        return false
    }
    const res = await fetch('/api/tasks', {
        method: 'PUT',
        cors: 'same-origin',
        headers: {
            'Origin': '/',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({_id: id, done: done})
    })

    return res.status === 200
    
}

export {addTaskController, deleteTaskController, getTasksController, taskToggleController}