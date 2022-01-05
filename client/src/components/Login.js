import {useState} from 'react'
import {loginUser} from '../controllers/userController'
import '../loginstyles.css'

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
        <div id={'login'}>
            <form id={'login-form'} onSubmit={login}>
                <h1 className={'text-center'} id={'login-heading'}>Login</h1>
                <div className="form-group">
                    <small htmlFor="">Username</small>
                    <input type="text" className={'form-control'} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="form-group">
                    <small htmlFor="">Password</small>
                    <input type="password" className={'form-control'} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <input type="submit" name="" className="btn btn-outline-dark submit-btn" value={'Login'}/>
            </form>
        </div>
    )
}

export default Login