import Task from './Task'
// import PropTypes from 'prop-types'

//to display everything in the list
const Tasks = ({ tasks, onDelete, toggleCheck }) => {

    return (
        <>
            {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} toggleCheck={toggleCheck}/>))}
        </>
    )

}

// Tasks.propTypes = {
//     key: PropTypes.
// }

export default Tasks