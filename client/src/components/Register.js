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

        <>



            <form className={'add-form'} onSubmit={addTask}>
                <h1>Register</h1>
                <div className="form-control">
                    <small>Username</small>
                    <input type="text" placeholder={'username'} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-control">
                    <small>Password</small>
                    <input type="text" placeholder={'password'} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <input type="submit" name="" className="btn btn-block" value={'Register'} />
            </form>
        </>
    )
}

export default Register