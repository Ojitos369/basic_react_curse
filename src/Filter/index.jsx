import React from 'react'
import { TodoContext } from '../TodoContext';

function Filter() {
    const { filtro, setFiltro } = React.useContext(TodoContext);
    const filters_class = [
        `col-3 btn ${filtro === 'All' ? 'btn-success' : 'btn-primary'} text-center`,
        `col-3 btn ${filtro === 'Done' ? 'btn-success' : 'btn-primary'} text-center`,
        `col-4 btn ${filtro === 'Pending' ? 'btn-success' : 'btn-primary'} text-center`
    ]

    const onFilterClick = (e) => {
        const text = e.target.textContent
        setFiltro(text)
    }

    return (
        <div className='row d-flex justify-content-center'>
            <button onClick={onFilterClick} className={filters_class[0]}>All</button>
            <button onClick={onFilterClick} className={filters_class[1]}>Done</button>
            <button onClick={onFilterClick} className={filters_class[2]}>Pending</button>
        </div>
    )
}

export { Filter };