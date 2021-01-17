import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdCancel } from 'react-icons/md';
import './ToDoListItem.css';

const ToDoListItem = ({ todo, onToggle, onRemove }) => {
  return (
    <li className={todo.com ? 'com' : ''}>
      <i onClick={() => onToggle(todo.id)}>{todo.com ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}</i>
      <span>{todo.text}</span>
      <i onClick={() => onRemove(todo.id)}>
        <MdCancel />
      </i>
    </li>
  );
};

export default React.memo(ToDoListItem);
