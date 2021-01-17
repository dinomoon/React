import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './ToDoInput.css';

function ToDoInput({ onInsert }) {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(text);
    setText('');
  };

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button type="submit">
          <MdAdd />
        </button>
      </form>
    </div>
  );
}

export default ToDoInput;
