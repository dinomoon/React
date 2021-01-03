import {useRef} from 'react';
import CreateUser from './15. 배열에 항목 수정하기/CreateUser';
import UserList from './15. 배열에 항목 수정하기/UserList';
import { useState } from 'react';
import { useMemo } from 'react';
import { useCallback } from 'react';

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는 중...");
  return users.filter(user => user.active).length;
}

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
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    })
  }, [inputs])

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
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
  }, [username, email, users]);

  const onRemove = useCallback(id => {
    setUsers(users.filter(user => user.id !== id));
  }, [users]);

  const onToggle = useCallback(id => {
    setUsers(users.map(
      user => user.id === id
      ? {...user, active: !user.active}
      : user
    ))
  }, [users]);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>
        활성 사용자 수: {count}
      </div>
    </>
  );
}

export default App;
