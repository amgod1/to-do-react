import React from 'react'
import Todo from './Todo'

const ToDoList = (props) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {props.todos.map(el => 
                    <Todo
                        status={props.status}
                        key={el.text}
                        text={el.text}
                        completed={el.completed}
                        todos={props.todos}
                        setTodos={props.setTodos}
                    />
                )}
            </ul>
        </div>
    )
}

export default ToDoList