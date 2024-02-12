import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";
const initialState = [];

const init = () =>{
    return JSON.parse(localStorage.getItem("todos")) || [];
}

export const useTodo = (initialState = []) => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])
    

    const handleNewTodo = (newTodo) =>{
        const action ={
            type:"[TODO] Add Todo",
            payload: newTodo
        }
        dispatch(action);
        console.log(newTodo)
    }

    const handleDeleteTodo = (id) =>{
        console.log(id)
        const action ={
            type:"[TODO] Remove Todo",
            payload: id
        }
        dispatch(action);
    }

    const handleToogleTodo = (id) =>{
        console.log(id)
        const action ={
            type:"[TODO] Toggle Todo",
            payload: id
        }
        dispatch(action);
    }

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToogleTodo
  }
}
