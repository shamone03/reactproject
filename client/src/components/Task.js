import {FaTimes} from 'react-icons/fa'
import CheckButton from './CheckButton'

const Task = ({task, onDelete, toggleCheck}) => {
    return (
        <div className={'task'}>
            <CheckButton toggleCheck={toggleCheck} taskID={task._id} checked={task.done}/>
            <div className={''}>
                {/*need to create arrow func because only function ref was passed down*/}
                <h3>{task.title} <FaTimes onClick={() => onDelete(task._id)} style={{color: "red"}}/></h3>
                <p>{task.body}</p>
            </div>


        </div>
    )
}

export default Task