import {useState} from 'react'
import {loginUser} from '../controllers/userController'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const login = async () => {
        console.log(await loginUser(username, password))
    }
    return (
        <>
            <h1>Login</h1>
            <form className={'add-form'} onSubmit={login}>
                <div className="form-control">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder={'username'} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="text" placeholder={'password'} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <input type="submit" name="" className="btn btn-block" value={'Login'}/>
            </form>
        </>
    )
}

export default Login