import React from "react";

const TodoList = ({ todos }) => {
    return (
        <div className="list-wrapeer">
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