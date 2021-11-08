import {useState} from 'react'


const AddTask = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [done, setDone] = useState(false)


    const submitForm = (e) => {
        e.preventDefault()
        if (!title) {
            alert('Enter a title')

            return
        }
        onAdd({title, body, done})
    }

    return (
        <form className={'add-form'} onSubmit={submitForm}>
            <div className="form-control">
                <label htmlFor="">Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type="text" placeholder={'description'} onChange={(e) => setBody(e.target.value)} value={body}/>
            </div>
            <div className="form-control">
                <label htmlFor="">Status</label>
                <input type="checkbox" onChange={(e) => setDone(e.currentTarget.checked)} checked={done}/>
            </div>
            <input type="submit" name="" className="btn btn-block" value={'Add Task'}/>
        </form>
    )
}

export default AddTask