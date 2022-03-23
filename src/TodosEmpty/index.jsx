import React from 'react'
import './TodosEmpty.css';

function TodosEmpty() {
    return (
        <div className='container TodosEmpty'>
            <div className='row d-flex justify-content-center'>
                <p className='col-12 text-center text-light h4'>Crea tu primer TODO...</p>
            </div>
            <div className='empty-img-container row d-flex justify-content-center'>
                <div className='empty-img'></div>
            </div>
        </div>
    )
}

export { TodosEmpty };