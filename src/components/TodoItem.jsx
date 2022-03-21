import React from 'react'

function TodoItem(props) {
    return (
        <li>
            {props.todo.text} - {props.todo.done ? 'Done' : 'Pending'}
        </li>
    )
}

export { TodoItem };