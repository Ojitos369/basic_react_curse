//import './App.css';
import React from 'react'
import { AppUI } from './AppUI'

const todosList = [
  {key: 1, text: 'Learn React', done: true},
  {key: 2, text: 'Deploy Project', done: false},
  {key: 3, text: 'Listening Twice', done: false},
  {key: 4, text: 'Learn React 2', done: false},
  {key: 5, text: 'Deploy Project 2', done: true},
  {key: 6, text: 'Listening Twice 2', done: false},
  {key: 7, text: 'Learn React 3', done: false},
  {key: 8, text: 'Deploy Project 3', done: false},
  {key: 9, text: 'Listening Twice 3', done: true},
]

function App(props) {
  const [todos, setTodos] = React.useState(todosList);
  const [searchValue, setSearchValue] = React.useState('')
  const todos_filter = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
  const [filtro, setFiltro] = React.useState('All')
  const todos_list = todos_filter.filter(todo => filtro === 'All' || (filtro === 'Done' && todo.done) || (filtro === 'Pending' && !todo.done))

  const totalCompletedTodo = todos.filter(todo => todo.done).length
  const totalTodos = todos.length

  const addTodo = () => {
    const todoText = document.getElementById('new-todo').value;
    const key = todos[todos.length - 1].key + 1;
    if (todoText.length > 0) {
      setTodos(prevTodos => {
        return [
          ...prevTodos,
          {
            key,
            text: todoText,
            done: false
          }
        ]
      })
    }
    document.getElementById('new-todo').value = '';
  }

  const changeTodoDone = (myTodo) => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.key === myTodo.key) {
          return {
            ...todo,
            done: !todo.done
          }
        } else {
          return todo;
        }
      })
    })
  }


  const delTodo = (myTodo) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key !== myTodo.key)
    })
  }

  return (
    <AppUI 
      totalCompletedTodo={totalCompletedTodo}
      totalTodos={totalTodos}
      addTodo={addTodo}
      filtro={filtro}
      setFiltro={setFiltro}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      todos_list={todos_list}
      changeTodoDone={changeTodoDone}
      delTodo={delTodo}
    />
  );
}

export default App;
