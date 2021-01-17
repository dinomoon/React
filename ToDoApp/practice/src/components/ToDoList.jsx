import React from 'react';
import './ToDoList.css';
import ToDoListItem from './ToDoListItem';

function ToDoList({ todos, onToggle, onRemove }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <ToDoListItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
