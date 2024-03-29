import React from 'react'
import { TodoContext } from '../TodoContext';
import './TodoChart.css';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

function TodoChart() {
    const { totalCompletedTodo, totalTodos } = React.useContext(TodoContext);
    const todoUndone = totalTodos - totalCompletedTodo;
    const state = {
        labels: ['Completed', 'Undone'],
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: [
                    '#00FF00',
                    '#FF0000',
                ],
                hoverBackgroundColor: [
                    '#00FF00',
                    '#FF0000',
                ],
                data: [totalCompletedTodo, todoUndone]
            }
        ]
    };
    const porcentaje = totalCompletedTodo / totalTodos * 100;
    const title = !isNaN(porcentaje) ? `${porcentaje.toFixed(2)}% completed` : 'No hay TODOS';
    return (
        <div className="chart mb-5">
            <p className='text-center h3 text-light'>{title}</p>
            {!isNaN(porcentaje) &&
                <Chart
                    type="pie"
                    data={state}
                    options={{
                        title:{
                            display:true,
                            text:'TODOS Chart',
                            fontSize:20
                        },
                        legend:{
                            display:true,
                            position:'top'
                        }
                    }}
                />
            }
        </div>
    )
}

export { TodoChart };