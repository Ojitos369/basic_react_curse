import React from 'react'
import './TodoItem.css'

function TodoItem(props) {
    let backgroundClass = props.todo.done ? 'todo-done' : 'todo-undone';
    
    const changeTodoDone = props.changeTodoDone
    const delTodo = props.delTodo
    return (
        <li className={`d-flex justify-content-around align-items-center ${backgroundClass} TodoItem`} id={`container-${props.todo.key}`}>
            <input 
                className='d-none'
                type="checkbox"
                id={props.todo.key}
                checked={props.todo.done}
                onChange={() => changeTodoDone(props.todo)}
            />
            <label htmlFor={props.todo.key} className='col-8 text-center'>{props.todo.text}</label>
            <button
                className='del-todo-item col-1'
                onClick={() => delTodo(props.todo)}
            >
                🗑️
            </button>
        </li>
    )
}

export { TodoItem };