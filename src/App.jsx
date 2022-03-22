//import './App.css';
import React from 'react'
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoAdd } from './components/TodoAdd';
import { Filter } from './components/Filter';

const todos = [
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
  return (
    <React.Fragment>
      <TodoCounter />

      <div className='container-fluent mt-4'>
        <div className='row d-flex justify-content-center'>
          <div className='col-11 col-md-5 container-fluent'>
            <TodoAdd />
            <div className='row d-flex justify-content-center mt-4'>
              <Filter />
            </div>
          </div>
          <div className='col-12 col-md-7 container-fluent'>
            <div className='row d-flex justify-content-center'>
              <TodoSearch />
            </div>
            <TodoList>
              {todos.map(todo => (
                <TodoItem key={todo.key} todo={todo}/>
              ))}
            </TodoList>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}

export default App;
