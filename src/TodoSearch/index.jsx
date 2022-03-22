import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    const onSearchChange = (e) => {
        const text = e.target.value
        setSearchValue(text)
    }

    return (
        <div className='d-flex justify-content-center mb-4'>
            <input 
                className='col-10 search text-center'
                type="text"
                name="search"
                value={searchValue}
                placeholder="Buscar tarea" 
                onChange={onSearchChange}
            />
        </div>
    )
}

export { TodoSearch };