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

//logs in user, stores token in localStorage
const loginUser = async (username, password) => {
    const res = await fetch('/api/login', {
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
        localStorage.setItem("token", data.token)
        return data.token
    } else {
        return 'error'
    }
}

export {addUserController, loginUser}