const addUserController = async (username, password) => {
    const res = await fetch('/api/users', {
        method: 'POST',
        cors: 'same-origin',
        headers: {
            'Origin': `/`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username, password: password})
    })
    return res.status === 200
}

export {addUserController}