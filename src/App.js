import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {

  let initialTodos = (localStorage?.getItem('todos') === null) ? [] : JSON.parse(localStorage.getItem('todos'))

  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState(initialTodos)
  const [status, setStatus] = useState('all')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="App">
      
      <Header />
      <Form 
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <ToDoList
        todos={todos}
        setTodos={setTodos}
        status={status}
      /> 
    </div>
  );
}

export default App