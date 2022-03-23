import React from 'react'
import './TodosError.css';

function TodosError() {
    return (
        <div className='container TodosError'>
            <div className='row d-flex justify-content-center'>
                <p className='col-12 text-center text-light h4'>Error al cargar los TODOs...</p>
            </div>
            <div className='error-img-container row d-flex justify-content-center'>
                <div className='error-img'></div>
            </div>
        </div>
    )
}

export { TodosError };