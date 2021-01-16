import React from 'react';
import './ToDoInput.css';

function ToDoInput({ text, onChange, onSubmit }) {
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button type="submit">추가</button>
      </form>
    </div>
  );
}

export default ToDoInput;
