import React, { useRef, useState } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import ToDoTemplate from './components/ToDoTemplate';

const App = () => {
  const nextId = useRef(4);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'a',
      com: false,
    },
    {
      id: 2,
      text: 'b',
      com: false,
    },
    {
      id: 3,
      text: 'c',
      com: true,
    },
  ]);

  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: nextId.current, text, com: false }]);
    setText('');
    nextId.current += 1;
  };

  return (
    <div>
      <ToDoTemplate>
        <ToDoInput text={text} onChange={onChange} onSubmit={onSubmit}></ToDoInput>
        <ToDoList todos={todos}></ToDoList>
      </ToDoTemplate>
    </div>
  );
};

export default App;
