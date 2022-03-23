import React from 'react'
import { TodoContext } from '../TodoContext';

function TodoAdd() {
    const { addTodo } = React.useContext(TodoContext);
    
    return (
        <form className='row d-flex justify-content-center' id="add-form" onSubmit={e => {
            e.preventDefault();
            addTodo();
        }}>
            <input 
                className='col-11 col-md-7'
                type="text"
                name="add_todo"
                placeholder="Add Todo"
                id='new-todo'
                />
            <button
                className='col-11 col-md-3'
                type="submit"
            >
                ➕
            </button>
        </form>
    )
}

export { TodoAdd };