import React from 'react'
import { useLocalStorage } from './useLocalStorage';
const TodoContext = React.createContext();

function TodoProvier(props) {
    const {
        item: todos,
        saveItems: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    
    const [searchValue, setSearchValue] = React.useState('')
    const todosSearchFilter = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
    const [filtro, setFiltro] = React.useState('All')
    const todosList = todosSearchFilter.filter(todo => filtro === 'All' || (filtro === 'Done' && todo.done) || (filtro === 'Pending' && !todo.done))
    const [editTodoText, setEditTodoText] = React.useState('')
    const [editTodoId, setEditTodoId] = React.useState('')

    const totalCompletedTodo = todos.filter(todo => todo.done).length
    const totalTodos = todos.length

    const resetSearch = () => {
        setSearchValue('')
    }

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

    const editTodo = () => {
        const newTodo = todos.map(todo => {
            if (todo.key === editTodoId) {
                todo.text = editTodoText;
            }
            return todo;
        });
        saveTodos(newTodo);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalCompletedTodo,
            totalTodos,
            addTodo,
            filtro,
            setFiltro,
            searchValue,
            resetSearch,
            setSearchValue,
            todosList,
            changeTodoDone,
            delTodo,
            editTodo,
            editTodoText,
            setEditTodoText,
            editTodoId,
            setEditTodoId,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvier };