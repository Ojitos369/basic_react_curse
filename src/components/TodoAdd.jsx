import React from 'react'

function TodoAdd({ todos, setTodos }) {
    const addTodo = () => {
        const todoText = document.getElementById('new-todo').value;
        const key = todos[todos.length - 1].key + 1;
        if (todoText.length > 0) {
            setTodos(prevTodos => {
                return [
                    ...prevTodos,
                    {
                        key,
                        text: todoText,
                        done: false
                    }
                ]
            })
        }
        document.getElementById('new-todo').value = '';
    }
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