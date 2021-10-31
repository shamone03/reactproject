const addTaskController = async (task) => {
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
        return true
        // setTasks([...tasks, task])
        // setRender(!render)
    }).catch(err => {
        console.log(err)
    })
}

const updateTaskController = async (task) => {
    fetch('/tasks', {
        method: 'PUT',
        cors: 'same-origin',
        headers: {
            'Origin': '/',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
    })

}

export {addTaskController}