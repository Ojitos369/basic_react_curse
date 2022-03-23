import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';

function TodoSearch() {
    const { searchValue, setSearchValue, resetSearch } = React.useContext(TodoContext);
    const onSearchChange = (e) => {
        const text = e.target.value
        setSearchValue(text)
    }

    return (
        <div className='d-flex justify-content-around mb-4'>
            <input 
                className='col-8 search text-center'
                type="text"
                name="search"
                value={searchValue}
                placeholder="Buscar tarea" 
                onChange={onSearchChange}
            />
            <button
                className='col-2 reset-search text-center'
                onClick={resetSearch}
            >
                Reset
            </button>
        </div>
    )
}

export { TodoSearch };