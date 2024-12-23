import React from "react";
import './App.css';

const TodoList = ({ todos }) => {
    return (
        <div className="list-wrapper">
            <div className="container">
                {todos.map(todo => {
                    return (
                        <div key={todo.id}>
                            <label>
                                <input type="checkbox"/>
                                {todo.name}
                            </label>
                        </div>
                    )
                })}
            </div>
        </div>
    )
  }

export default TodoList;