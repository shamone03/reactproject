import { useState } from 'react'


const AddTask = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [task, setTask] = useState('')
    const [status, setStatus] = useState(false)


    const submitForm = (e) => {
        e.preventDefault()
        if (!title) {
            alert('Enter a title')
            return
        }
        onAdd({ title, task, status })
    }

    return (
        <form className={'add-form'} onSubmit={submitForm}>
            <div className="form-control">
                <label htmlFor="">Title</label>
                <input type="text" value={ title } onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type="text" placeholder={'description'} onChange={(e) => setTask(e.target.value)} value={ task } />
            </div>
            <div className="form-control">
                <label htmlFor="">Status</label>
                <input type="checkbox" onChange={(e) => setStatus(e.currentTarget.checked)} checked={ status }/>
            </div>
            <input type="submit" name="" className="btn btn-block" value={'Add Task'}/>
        </form>
    )
}

export default AddTask