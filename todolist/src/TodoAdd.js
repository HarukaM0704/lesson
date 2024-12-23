import React from "react";

function TodoAdd() {
    return(
        <div className="add-wrapper">
            <div className="container">
                <p>ToDo : </p><input className="todo"></input>
                <button>登録</button>
            </div>
        </div>
    );
}

export default TodoAdd;