import React from "react";
import './App.css';

const TodoList = ({ todos,deleteTask }) => {
    return (
        <div className="list-wrapper">
            <div className="container">
                <table border={1}>
                    <tr bgcolor="pink">
                        <th className="check">チェック</th>
                        <th className="task">タスク名</th>
                        <th className="delete">削除</th>
                    </tr>
                    {todos.map(todo => {
                        return (
                            <tr mykey={todo.id}>
                                <td className="check"><input type="checkbox"/></td>
                                <td className="task">{todo.name}</td>
                                <td className="delete"><button onClick={deleteTask}>✖</button></td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
  }

export default TodoList;