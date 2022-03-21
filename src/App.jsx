//import './App.css';
import React from 'react'
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoAdd } from './components/TodoAdd';

const todos = [
  {text: 'Learn React', done: false},
  {text: 'Deploy Project', done: false},
  {text: 'Listening Twice', done: false},
]

function App(props) {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />
      <br/>

      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} todo={todo}/>
        ))}
      </TodoList>

      <TodoAdd />
    </React.Fragment>
  );
}

export default App;
