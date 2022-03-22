import React from 'react'

function TodoAdd() {
    return (
        <div className='row d-flex justify-content-center'>
            <input 
                className='col-11 col-md-7'
                type="text"
                name="add_todo"
                placeholder="Add Todo"
                />
            <button className='col-11 col-md-3'>➕</button>
        </div>
    )
}

export { TodoAdd };