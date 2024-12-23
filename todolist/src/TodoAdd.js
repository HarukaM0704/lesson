import React, { useState } from "react";
import TodoList from "./TodoList";
import {v4 as uuidv4} from 'uuid';

function TodoAdd() {
    const [todos,setTodos] = useState([
        {id: 1, name: "todo1", completed:false}
    ])

    const [inputValue, setInputValue] = useState('')

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const handleAddTodo = () => {
        if(inputValue !== ''){
            return(
                setTodos((prevTodos) => {
                    return [...prevTodos,{id:uuidv4(), name: inputValue, completed:false}]
                })
            )
        }
    }

    return(
        <div className="add-wrapper">
            <div className="container">
                <label>ToDo : <input value={inputValue} onChange={handleInputValue}></input></label>
                <button onClick={handleAddTodo}>登録</button>
            </div>
            <TodoList todos={todos}/>
        </div>
    );
}

export default TodoAdd;