import React, {useState} from "react"

import {addUserController} from "../controllers/userController";
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
            <h1>
                Register
            </h1>



            <form className={'add-form'} onSubmit={addTask}>
                <div className="form-control">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder={'username'} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="text" placeholder={'password'} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <input type="submit" name="" className="btn btn-block" value={'Register'}/>
            </form>
        </>
    )
}

export default Register