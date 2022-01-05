require('dotenv').config()

const addUserController = async (username, password) => {
    const res = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    })
    return res.status === 200
}

//logs in user, stores token in localStorage
const loginUser = async (username, password) => {
    
    const res = await fetch(`http://localhost:5000/api/login`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            "username": username,
            "password": password
        })
        // redirect: 'follow'
      })
    if (res.status === 200) {
        const data = await res.json()
        localStorage.setItem("token", data.token)
        return {success: true, token: data.token}
    } else {
        return {success: false}
    }           
}

const verifyUser = async () => {
    const res = await fetch('http://localhost:5000/api/verify', {
        method: 'GET',
        headers: {
            'Origin': `/`,
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    })

    return res.status === 200
}

export {addUserController, loginUser, verifyUser}