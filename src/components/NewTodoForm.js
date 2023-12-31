import React, {useState} from 'react'

function NewTodoForm(props) {

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const submitTodo = () => {
        if (description !== '' && assigned !== '') {
            props.addTodo(description, assigned);
            setDescription('')
            setAssigned('')
        }
    }

    const assignedChange = (event) => {
        console.log('Assigned', event.target.value);
        setAssigned(event.target.value);
    }

    return (
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Assigned</label>
                    <input type='text'
                    className='form-control'
                    required
                    onChange={assignedChange}
                    value={assigned}
                    ></input>
                </div>
                <div className='mb-3'>
                    <label className='form-control'>Description</label>
                    <textarea 
                        className='form-control'
                        rows={3} 
                        required
                        onChange={e => setDescription(e.target.value)} //This is done in a different way than assigned change to try out both methods
                        value={description}
                        ></textarea>
                </div>
                <button 
                    type='button'
                    className='btn btn-primary mt-3'
                    onClick={submitTodo}
                >
                        Add Todo
                </button>
            </form>
        </div>
    )
}

export default NewTodoForm