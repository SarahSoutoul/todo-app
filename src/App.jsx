import React, {useState} from "react";
import './App.css';
import {Form, TodoList, FactBox} from './components';

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([])

    return (
        <div>
          <header>Sarah's Todo List</header>
          <Form setInputText={setInputText} setTodos={setTodos} todos={todos} inputText={inputText}/>
          <TodoList todos={todos} setTodos={setTodos}/>
          <FactBox todoCount={todos.length}/>
        </div>
    );
}

export default App;

