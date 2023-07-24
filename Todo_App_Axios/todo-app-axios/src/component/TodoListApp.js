
import React, { useState, useEffect } from 'react';
import axios from 'axios';



const TodoListApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('  http://localhost:8080/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('  http://localhost:8080/todos', {
        title: newTodo,
        completed: false,
      });
      alert(`Todo added successfully. Status: ${response.status}`);
      fetchTodos(); // Refresh the todo list after adding a new todo
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>

      <input type="text" value={newTodo} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListApp;
