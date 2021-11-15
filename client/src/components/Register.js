import React, { useState } from "react"

import { addUserController } from "../controllers/userController";

function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const addTask = async () => {
        if (await addUserController(username, password)) {
            console.log('success')
        }
    }

    return (

        <div id={'register'}>

            <form id={'register-form'} onSubmit={addTask}>
                <h1 className={'text-center'} id={'register-heading'}>Register</h1>
                <div className="form-group">
                    <small>Username</small>
                    <input type="text" className={'form-control'} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <small>Password</small>
                    <input type="text" className={'form-control'} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <input type="submit" name="" className="btn btn-block submit-btn" value={'Register'} />
            </form>
        </div>
    )
}

export default Register