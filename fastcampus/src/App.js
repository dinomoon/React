import {useRef} from 'react';
import CreateUser from './15. 배열에 항목 수정하기/CreateUser';
import UserList from './15. 배열에 항목 수정하기/UserList';
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
      active: true,
    },
    {
      id: 2,
      username: 'hj',
      email: 'heyjoo@google.com',
      active: false,
    },
    {
      id: 3,
      username: 'fr',
      email: 'vhfl@google.com',
      active: false,
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

  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id
      ? {...user, active: !user.active}
      : user
    ))
  }

  return (
    <>
      <CreateUser
        username={username}
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;
