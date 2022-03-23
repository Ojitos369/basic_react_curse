import React from 'react'
import './TodosLoading.css';

function TodosLoading() {
    return (
        <div className='container TodosLoading'>
            <div className='row d-flex justify-content-center'>
                <p className='col-12 text-center text-light h4'>Cargando los TODOs...</p>
            </div>
            <div className='loading-img-container row d-flex justify-content-center'>
                <div className='loading-img'></div>
            </div>
        </div>
    )
}

export { TodosLoading };