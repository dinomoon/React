import React from 'react';
import './ToDoTemplate.css';

function ToDoTemplate({ children }) {
  return (
    <div className="container">
      <div className="header">To do App</div>
      <div>{children}</div>
    </div>
  );
}

export default ToDoTemplate;
