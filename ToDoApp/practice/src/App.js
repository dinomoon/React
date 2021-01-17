import React, { useCallback, useRef, useState } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import ToDoTemplate from './components/ToDoTemplate';

function createBulkTodos() {
  const array = [];
  for (let i = 0; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      com: false,
    });
  }
  return array;
}

const App = () => {
  const nextId = useRef(4);
  const [todos, setTodos] = useState(createBulkTodos);

  const onInsert = useCallback((text) => {
    setTodos((todos) => [...todos, { id: nextId.current, text, com: false }]);
    nextId.current += 1;
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, com: !todo.com } : todo)));
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <div>
      <ToDoTemplate>
        <ToDoInput onInsert={onInsert}></ToDoInput>
        <ToDoList todos={todos} onToggle={onToggle} onRemove={onRemove}></ToDoList>
      </ToDoTemplate>
    </div>
  );
};

export default App;
