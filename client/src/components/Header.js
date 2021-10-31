import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({toggleShowAddTask, showAddTask}) => {
    const onClick = () => {
        toggleShowAddTask()
    }

    return (
        <header className='header'>

            {/*<h1 style={headingStyle}> task tracker {props.title}</h1>*/}
            <h1>task tracker</h1>
            <Button color={!showAddTask ? 'green' : 'red'} text={!showAddTask ? 'Add' : 'Close'} onClick={onClick}/>

            {/*<Button />*/}
            {/*<Button color={'green'} text={'Hello2'}/>*/}
            {/*<Button color={'green'} text={'Hello3'}/>*/}
        </header>
    )
}

// const headingStyle = {
//     color: "cadetblue",
//     backgroundColor: "black",
//
// }
Header.propTypes = {
    title: PropTypes.string
}


export default Header