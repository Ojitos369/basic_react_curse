import React from 'react'

const estilos = {
    color: '#0f0',
    backgroudColor: '#000',
}

function TodoCounter() {
    return (
        <h2 style={estilos}>Has completado x de y tareas</h2>
    )
}

export { TodoCounter };