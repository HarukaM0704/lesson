import React, { useState } from "react";
import TodoList from "./TodoList";
import {v4 as uuidv4} from 'uuid';
import './App.css'

function TodoAdd() {
    const [todos,setTodos] = useState([
  //      {id: 1, name: "todo1", completed:false}
    ])

    const deleteTask = (e) => {
        setTodos(
            todos.filter((todo,index) => (todo.id !== e.currentTarget.parentNode.parentNode.getAttribute('mykey')))
        )
    }

    const [inputValue, setInputValue] = useState('')

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const handleAddTodo = () => {
        if(inputValue !== ''){
            return(
                setTodos((prevTodos) => {
                    return [...prevTodos,{id:uuidv4(), name: inputValue}]
                })
            )
        }
    }

    return(
        <>
        <div className="add-wrapper">
            <div className="container">
                <label>ToDo : <input value={inputValue} onChange={handleInputValue}></input></label>
                <button onClick={handleAddTodo}>登録</button>
            </div>
        </div>
        <TodoList 
            todos={todos}
            deleteTask={deleteTask}
        />
        </>
    );
}

export default TodoAdd;