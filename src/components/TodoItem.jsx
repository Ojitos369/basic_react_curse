import React from 'react'
import '../css/TodoItem.css'

function TodoItem(props) {
    let backgroundClass = props.todo.done ? 'todo-done' : 'todo-undone';

    const setTodos = props.setTodos;
    
    const changeTodoDone = () => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.key === props.todo.key) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo;
                }
            })
        })
    }

    const delTodo = () => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.key !== props.todo.key)
        })
    }

    return (
        <li className={`d-flex justify-content-around align-items-center ${backgroundClass} TodoItem`} id={`container-${props.todo.key}`}>
            <input 
                className='col-1'
                type="checkbox"
                name="done"
                id={props.todo.key}
                checked={props.todo.done}
                onChange={changeTodoDone}
            />
            <label htmlFor={props.todo.key} className='col-8 text-center'>{props.todo.text}</label>
            <button
                className='del-todo-item col-1'
                onClick={delTodo}
            >
                🗑️
            </button>
        </li>
    )
}

export { TodoItem };