// src/TodoList.jsx
import React, { useState } from 'react';

 const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    setTodos([...todos, input.trim()]);
    setInput('');
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Todo List</h2>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a todo"
        />
        <button type="submit" style={{ marginLeft: '10px' }}>Add</button>
      </form>

      <ul style={{ marginTop: '20px' }}>
        
        {todos.map((todo, idx) => (
          <li key={idx} style={{ marginBottom: '8px' }}>
            {todo}
            <button onClick={() => handleDelete(idx)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;