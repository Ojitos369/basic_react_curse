import React from 'react'

function TodoAdd({ addTodo }) {
    
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