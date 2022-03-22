import React from 'react'
import { TodoContext } from '../TodoContext';
import './TodoCounter.css'

function TodoCounter() {
    const { 
        totalCompletedTodo,
        totalTodos 
    } = React.useContext(TodoContext);
    return (
        <header className='container-fluent mt-4 text-light'>
            <div className='row'>
            <h1 className='col text-center'>List Todo</h1>
            </div>
            <div className='row'>
            <h2 className='col text-center'>{totalCompletedTodo} Tareas de {totalTodos} completadas</h2>
            </div>
        </header>
    )
}

export { TodoCounter };