import React from 'react'
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoChart } from '../TodoChart';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoAdd } from '../TodoAdd';
import { Filter } from '../Filter';
import { Modal } from '../Modal';

function AppUI() {
    const { 
      error, 
      loading,
      todosList,
      editTodoText,
      setEditTodoText,
      editTodo,
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
          <TodoCounter />
    
          <div className='container-fluent mt-4'>
            <div className='row d-flex justify-content-center'>
              <div className='col-11 col-md-5 container-fluent'>
                <div className='row d-flex justify-content-center mt-4'>
                  <TodoAdd />
                </div>
                <div className='row d-flex justify-content-center mt-4'>
                  <Filter />
                </div>
                <div className='row d-flex justify-content-center mt-4'>
                  <TodoChart />
                </div>
              </div>
              <div className='col-12 col-md-7 container-fluent'>
                <div className='row d-flex justify-content-center'>
                  <TodoSearch />
                </div>
                  <TodoList>
                    {error && <p className='text-center text-light h4'>Algo salio mal :'c F for you...</p>}
                    {loading && <p className='text-center text-light h4'>Cargando Los datos...</p>}
                    {(!loading && todosList.length === 0) && <p className='text-center text-light h4'>Agrega tu nuevo TODO :3</p>}
                    {todosList.map(todo => (
                      <TodoItem key={todo.key} todo={todo}/>
                    ))}
                  </TodoList>
              </div>
            </div>
          </div>
          <Modal>
            <div className="modal fade" id={`mymodal`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form onSubmit={e => {
                                e.preventDefault();
                                editTodo();
                            }}>
                            <div className="mb-3">
                                <label htmlFor={`modal-data`} className="form-label">Edit Todo</label>
                                <input type="text"
                                    className="form-control"
                                    id={`modal-data`}
                                    value={editTodoText}
                                    onChange={e => setEditTodoText(e.target.value)}
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Editar</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          </Modal>
        </React.Fragment>
      );
}

export { AppUI };