import React from 'react'

const Form = (props) => {
    const submitTodo = (e) => {
        e.preventDefault()
        if (props.inputText === '') return
        props.setTodos([
            ...props.todos,
            {
                text: props.inputText,
                completed: false,
            }
        ])
        props.setInputText('')
    }
    const statusHandler = (e) => {
        props.setStatus(e.target.value)
    }

    return (
        <form>
            <div>
                <input 
                    className="todo-input" 
                    type="text" 
                    value={props.inputText}
                    onChange={(e) => props.setInputText(e.target.value)} 
                />
                <button 
                    className="todo-button" 
                    type="submit"
                    onClick={submitTodo}
                >
                    <i className="fas fa-plus-square"></i>
                </button>
            </div>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form