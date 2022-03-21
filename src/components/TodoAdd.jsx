import React from 'react'

function TodoAdd() {
    return (
        <React.Fragment>
            <input type="text" name="add_todo" value="" placeholder="Add Todo" />
            <button>➕</button>
        </React.Fragment>
    )
}

export { TodoAdd };