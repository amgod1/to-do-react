import React from 'react'

const Todo = (props) => {
    const deleteHandler = () => props.setTodos(props.todos.filter(el => el.text !== props.text))
    const completeHandler = () => {
        props.setTodos(props.todos.map(el => {
            if (el.text === props.text) {
                return {
                    ...el,
                    completed: !el.completed
                }
            }
            return el
        }))
    }

    return (
        <div className={`todo 
            ${
                (props.status === 'all') 
                    ? '' 
                    : (props.status === 'completed' && props.completed === true) 
                        ? ''
                        : (props.status === 'uncompleted' && props.completed === false) 
                            ? ''
                            : 'hidden'
            }
        `}>
            <li className={`todo-item ${(props.completed) ? 'completed' : ''}`}>
                {props.text}
            </li>
            <button 
                className='complete-btn'
                onClick={completeHandler}
            >
                <i className='fas fa-check'></i>
            </button>
            <button 
                className='trash-btn'
                onClick={deleteHandler}
            >
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default Todo