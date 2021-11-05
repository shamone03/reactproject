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

const loginUser = async (username, password) => {
    const res = await fetch('/api/checkPassword', {
        method: 'POST',
        cors: 'same-origin',
        headers: {
            'Origin': `/`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username, password: password})
    })
    if (res.status === 200) {
        const data = await res.json()
        return data.token
    } else {
        return 'error'
    }
}

export {addUserController, loginUser}