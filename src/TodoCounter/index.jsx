import React from 'react'
import './TodoCounter.css'

function TodoCounter({ totalCompletedTodo, totalTodos }) {
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