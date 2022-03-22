import React from 'react'

function Filter() {
    const filter_type = 'All'
    const filters_class = [
        `col-3 btn ${filter_type === 'All' ? 'btn-success' : 'btn-primary'} text-center`,
        `col-3 btn ${filter_type === 'Done' ? 'btn-success' : 'btn-primary'} text-center`,
        `col-4 btn ${filter_type === 'Pending' ? 'btn-success' : 'btn-primary'} text-center`
    ]
    return (
        <div className='row d-flex justify-content-center'>
            <button className={filters_class[0]}>All</button>
            <button className={filters_class[1]}>Done</button>
            <button className={filters_class[2]}>Pending</button>
        </div>
    )
}

export { Filter };