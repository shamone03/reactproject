import {HashRouter, Link, Route, Switch} from 'react-router-dom'
// import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index2.css'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'


function App() {
    return (
        <HashRouter>
            <div className={'App'}>
                <nav className={'nav nav-pills nav-fill'}>
                    <Link className={'nav-link nav-item'} to={'/register'}>Register</Link>
                    <Link className={'nav-link nav-item'} to={'/'}>Home</Link>        
                    <Link className={'nav-link nav-item'} to={'/login'} onClick={() => localStorage.clear()}>Logout</Link>
                    
                
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