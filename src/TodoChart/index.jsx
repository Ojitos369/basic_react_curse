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
    const title =  `${totalCompletedTodo / totalTodos * 100}% completed`;
    return (
        <div className="chart">
            <p className='text-center h3 text-light'>{title}</p>
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
        </div>
    )
}

export { TodoChart };