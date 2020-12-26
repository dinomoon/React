import './App.css';
import {useRef} from 'react';
import CreateUser from './14. 배열에 항목 제거하기/CreateUser';
import UserList from './14. 배열에 항목 제거하기/UserList';
import { useState } from 'react';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  })

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'mk',
      email: 'ansrud1003@naver.com',
    },
    {
      id: 2,
      username: 'hj',
      email: 'heyjoo@google.com',
    },
    {
      id: 3,
      username: 'fr',
      email: 'vhfl@google.com',
    }
  ]);

  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const nextId = useRef(4);

  const onCreate = () => {
    setUsers([
      ...users,
      {
        id: nextId.current,
        username,
        email,
      }
    ])
    setInputs({
      username: '',
      email: ''
    })
    nextId.current += 1;
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  return (
    <>
      <CreateUser
        username={username}
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove}/>
    </>
  );
}

export default App;
