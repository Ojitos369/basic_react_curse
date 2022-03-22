import React from 'react'
import '../css/TodoCounter.css'

function TodoCounter() {
    return (
        <header className='container-fluent mt-4 text-light'>
            <div className='row'>
            <h1 className='col text-center'>List Todo</h1>
            </div>
            <div className='row'>
            <h2 className='col text-center'>3 Tareas de 5 completadas</h2>
            </div>
        </header>
    )
}

export { TodoCounter };