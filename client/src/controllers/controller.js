const addTaskController = async (task) => {
    const res = await fetch('/api/tasks', {
        method: 'POST',
        cors: 'same-origin',
        headers: {
            'Origin': `/`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    return res.status === 200
    
}

const deleteTaskController = async (id) => {
    const res = await fetch('/api/tasks', {
        method: 'DELETE',
        cors: 'same-origin',
        headers: {
            'Origin': `/`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({_id: id})
    })

    return res.status === 200

}

const getTasksController = async () => {

    const res = await fetch(`/api/tasks`, {
        method: 'GET',
        cors: 'same-origin',
        headers: {
            'Origin': `/`,
            'Content-Type': 'application/json'
        }
    })
    return await res.json()
}

const taskToggleController = async (id) => {
    const res = await fetch('/api/tasks', {
        method: 'PUT',
        cors: 'same-origin',
        headers: {
            'Origin': '/',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({_id: id})
    })
    
}

export {addTaskController, deleteTaskController, getTasksController, taskToggleController}