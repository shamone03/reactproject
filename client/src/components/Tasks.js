import Task from './Task'
// import PropTypes from 'prop-types'

//to display everything in the list
const Tasks = ({tasks, onDelete, toggleCheck}) => {

    return (
        <div id={"task-container"}>
            {tasks.map((task) => (<Task key={task._id} task={task} onDelete={onDelete} toggleCheck={toggleCheck}/>))}
        </div>
    )

}

// Tasks.propTypes = {
//     key: PropTypes.
// }

export default Tasks