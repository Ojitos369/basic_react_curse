import React from 'react'
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import './TodoItem.css'


function TodoItem(props) {
    const { changeTodoDone, delTodo, editTodo, setEditTodoText, setEditTodoId } = React.useContext(TodoContext);
    let backgroundClass = props.todo.done ? 'todo-done' : 'todo-undone';
    
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
            {!props.todo.done &&
                <button
                    className='edit-todo-item col-1'
                    data-bs-toggle="modal"
                    data-bs-target={`#mymodal`}
                    onClick={() => {
                        setEditTodoText(props.todo.text);
                        setEditTodoId(props.todo.key);
                    }}
                >
                    ✏️
                </button>
        }
            <Modal todo={props.todo} editTodo={editTodo} />
        </li>
    )
}

export { TodoItem };