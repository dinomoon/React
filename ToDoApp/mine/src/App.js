import React from 'react'
import { useState } from 'react'

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo("");
  };

  const onRemove = (index) => {
    setTodoList(todoList.filter(todo => todoList.indexOf(todo) !== index));
  };

  return (
    <div>
      <h1>To Do App</h1>
      <form action="" onSubmit={onSubmit}>
        <input type="text" placeholder="해야할 것" value={todo} onChange={onChange}/>
        <button type="submit">등록</button>
      </form>
      <ul>
        {todoList.map((todo, index) => {
          return (
            <li key={index}>
              {todo}
              <button onClick={() => onRemove(index)}>삭제</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App
