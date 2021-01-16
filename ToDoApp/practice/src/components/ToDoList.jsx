import React from 'react';
import './ToDoList.css';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

function ToDoList({ todos }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.com ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
