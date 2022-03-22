//import './App.css';
import React from 'react'
import { AppUI } from './AppUI'


function useLocalStorage(key, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      const locaStorageItem = localStorage.getItem(key);
      let parsedItem;

      if (locaStorageItem) {
        parsedItem = JSON.parse(locaStorageItem);
      } else {
        localStorage.setItem(key, JSON.stringify(initialValue));
        parsedItem = [];
      }
      setItem(parsedItem);
      setLoading(false);
    }, 2000);
  });

  const saveItems = (itemList) => {
    localStorage.setItem(key, JSON.stringify(itemList));
    setItem(itemList);
  }
  return {
    item,
    saveItems,
    loading
  }
}

function App(props) {
  

  const {
    item: todos,
    saveItems: saveTodos,
    loading
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('')
  const todos_filter = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
  const [filtro, setFiltro] = React.useState('All')
  const todos_list = todos_filter.filter(todo => filtro === 'All' || (filtro === 'Done' && todo.done) || (filtro === 'Pending' && !todo.done))

  const totalCompletedTodo = todos.filter(todo => todo.done).length
  const totalTodos = todos.length

  const addTodo = () => {
    const todoText = document.getElementById('new-todo').value;
    let key;
    if (todos.length === 0) {
      key = 1;
    } else {
      key = todos[todos.length - 1].key + 1;
    }
    
    if (todoText.length > 0) {
      const newTodo = {
        key: key,
        text: todoText,
        done: false
      }
      const newTodos = [...todos, newTodo];
      saveTodos(newTodos);
    }
    document.getElementById('new-todo').value = '';
  }

  const changeTodoDone = (myTodo) => {
    const newTodos = todos.map(todo => {
      if (todo.key === myTodo.key) {
        todo.done = !todo.done;
      }
      return todo;
    });
    saveTodos(newTodos);
  }


  const delTodo = (myTodo) => {
    const newTodo = todos.filter(todo => todo.key !== myTodo.key);
    saveTodos(newTodo);
  }

  return (
    <AppUI 
      loading={loading}
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
