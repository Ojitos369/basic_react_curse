import React from 'react'
import './TodoList.css'

function TodoList(props) {
    return (
        <section className='container mb-4 TodoList'>
            <ul className='list-group'>
                { props.children }
            </ul>
        </section>
    )
}

export { TodoList };