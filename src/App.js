import React, { useState, useEffect } from 'react';

//importing css
import './App.css';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

//importing components
import ToDoList from './components/ToDoList';
import Form from './components/Form';
import Filter from './components/Filter';

function App() {
  
  // states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //functions
  const filteredHandler = () => {
    switch(filter) {
      case 'done':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'not done':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
      }
  };

  //useEffect
  useEffect(() => {
    filteredHandler();
  }, [todos, filter]);

  return (
    <div className="root">
      <header>
        <h1>ToDooo!</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <Filter setFilter={setFilter} />
      <ToDoList todos={todos} filteredTodos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;