import React from 'react'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoAdd } from '../TodoAdd';
import { Filter } from '../Filter';

function AppUI({
    totalCompletedTodo,
    totalTodos,
    addTodo,
    filtro,
    setFiltro,
    searchValue,
    setSearchValue,
    todos_list,
    changeTodoDone,
    delTodo,
}) {
    return (
        <React.Fragment>
          <TodoCounter 
            totalCompletedTodo={totalCompletedTodo}
            totalTodos={totalTodos}
          />
    
          <div className='container-fluent mt-4'>
            <div className='row d-flex justify-content-center'>
              <div className='col-11 col-md-5 container-fluent'>
                <TodoAdd addTodo={addTodo} />
                <div className='row d-flex justify-content-center mt-4'>
                  <Filter 
                    filtro={filtro}
                    setFiltro={setFiltro}
                  />
                </div>
              </div>
              <div className='col-12 col-md-7 container-fluent'>
                <div className='row d-flex justify-content-center'>
                  <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                  />
                </div>
                <TodoList>
                  {todos_list.map(todo => (
                    <TodoItem 
                      key={todo.key}
                      todo={todo}
                      changeTodoDone={changeTodoDone}
                      delTodo={delTodo}
                    />
                  ))}
                </TodoList>
              </div>
            </div>
          </div>
    
        </React.Fragment>
      );
}

export { AppUI };