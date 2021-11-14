import {HashRouter, Link, Route, Switch} from 'react-router-dom'
import './index.css'
// import './index2.css'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'


function App() {
    return (
        <HashRouter>
            <div className={'App'}>
                <nav id={'navBar'}>
                    <li className={'listElement'} id={'homeLink'}><Link to={'/'}>Home</Link></li>
                    <li className={'listElement'} id={'registerLink'}><Link to={'/register'}>Register</Link></li>
                    {
                        localStorage.hasOwnProperty('token') ?
                        (<li className={'listElement'} id={'loginLink'} onClick={() => localStorage.clear()}><Link to={'/login'}>Logout</Link></li>) :
                        (<li className={'listElement'} id={'loginLink'}><Link to={'/login'}>Login</Link></li>)
                    }

                </nav>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/register'} component={Register}/>
                    <Route path={'/login'} component={Login}/>
                </Switch>
            </div>
        </HashRouter>

    )
}

export default App