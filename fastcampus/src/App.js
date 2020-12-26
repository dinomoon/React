import './App.css';
import UserList from './12. useRef로 컴포넌트 안의 변수 만들기/UserList';
import {useRef} from 'react';

function App() {
  const users = [
    {
      id: 1,
      name: 'mk',
      email: 'ansrud1003@naver.com',
    },
    {
      id: 2,
      name: 'hj',
      email: 'heyjoo@google.com',
    },
    {
      id: 3,
      name: 'fr',
      email: 'vhfl@google.com',
    }
  ];

  const nextId = useRef(4);

  const onCreate = () => {
    nextId.current += 1;
  }

  return (
    <UserList users={users}/>
  );
}

export default App;
