import React from 'react'
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoAdd } from '../TodoAdd';
import { Filter } from '../Filter';

function AppUI() {
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
                <TodoContext.Consumer>
                  {({ 
                    error, 
                    loading,
                    todos_list,
                  }) => (
                    <TodoList>
                      {error && <p className='text-center text-light h4'>Algo salio mal :'c F for you...</p>}
                      {loading && <p className='text-center text-light h4'>Cargando Los datos...</p>}
                      {(!loading && todos_list.length === 0) && <p className='text-center text-light h4'>Agrega tu nuevo TODO :3</p>}
                      {todos_list.map(todo => (
                        <TodoItem />
                      ))}
                    </TodoList>
                  )}
                </TodoContext.Consumer>
              </div>
            </div>
          </div>
    
        </React.Fragment>
      );
}

export { AppUI };