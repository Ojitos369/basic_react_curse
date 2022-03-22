import React from 'react'
import { TodoContext } from '../TodoContext';

function TodoAdd() {
    const { addTodo } = React.useContext(TodoContext);
    
    return (
        <div className='row d-flex justify-content-center'>
            <input 
                className='col-11 col-md-7'
                type="text"
                name="add_todo"
                placeholder="Add Todo"
                id='new-todo'
                />
            <button
                className='col-11 col-md-3'
                onClick={addTodo}
            >
                ➕
            </button>
        </div>
    )
}

export { TodoAdd };