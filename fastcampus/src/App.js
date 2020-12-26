import './App.css';
import {useRef} from 'react';
import UserList from './13. 배열에 항목 추가하기/UserList';
import CreateUser from './13. 배열에 항목 추가하기/CreateUser';
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

  return (
    <>
      <CreateUser
        username={username}
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}
      />
      <UserList users={users}/>
    </>
  );
}

export default App;
