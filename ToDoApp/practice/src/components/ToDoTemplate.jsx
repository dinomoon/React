import React from 'react';
import './ToDoTemplate.css';

function ToDoTemplate({ children }) {
  return (
    <div className="container">
      <h1 className="header">To do App</h1>
      <div>{children}</div>
    </div>
  );
}

export default ToDoTemplate;
