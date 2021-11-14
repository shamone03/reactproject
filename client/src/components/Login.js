import {useState} from 'react'
import {loginUser} from '../controllers/userController'

function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const login = async () => {
        const result = await loginUser(username, password)
        if (result.success) {

            console.log(props.history)
            props.history.push('/')
            // alert('logged in')
        } else {
            alert('no user found')
        }
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
                    <input type="password" placeholder={'password'} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <input type="submit" name="" className="btn btn-block" value={'Login'}/>
            </form>
        </>
    )
}

export default Login