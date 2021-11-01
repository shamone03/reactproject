const addTaskController = async (task) => {
    // let status
    // fetch('/tasks', {
    //     method: 'POST',
    //     cors: 'same-origin',
    //     headers: {
    //         'Origin': `/`,
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(task)
    // }).then(res => {
    //     res.json()
    //     console.log(res.status)
    //     status = res.status
    // }).then(data => {
    //     // console.log('data: ', data.message)
    //
    //     // setTasks([...tasks, task])
    //     // setRender(!render)
    // }).catch(err => {
    //     console.log('error in controller: ', err)
    // })
    // console.log('status', status)
    // return status === 200
    const res = await fetch('/tasks', {
        method: 'POST',
        cors: 'same-origin',
        headers: {
            'Origin': `/`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    return res.status === 200
    // const data = await res.json()
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