import React, { useEffect, useContext } from 'react';
import { UserDispatch } from '../App';

const User = React.memo(function User({user}) {
  const { username, email, id, active } = user;
  const dispatch = useContext(UserDispatch);
  // useEffect(() => {
  //   // 마운트
  //   // prop로 받은 값을 state로 설정할 때
  //   // REST API 요청
  //   // D3, Video.js 같은 라이브러리
  //   // setInterval, setTimeout 설정
  //   console.log('컴포넌트가 화면에 나타남');
  //   return () => {
  //     // 언마운트
  //     // clearInterval, clearTimeout
  //     // 라이브러리 인스턴스 제거
  //     console.log('컴포넌트가 화면에서 사라짐');
  //   }
  // }, []);
  useEffect(() => {
    console.log('user값이 설정됨');
    console.log(user);
    return () => {
      console.log('user값이 바뀌기 전');
      console.log(user);
  }
  }, [user]);
  return (
    <div>
      <b style={{
          color: active ? "green" : "black",
          cursor: 'pointer'
        }}
        onClick={() => dispatch({
          type: 'TOGGLE_USER',
          id
        })}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button onClick={() => dispatch({
        type: 'REMOVE_USER',
        id
      })}>삭제</button>
    </div>
  )
})

function UserList({users}) {
  return(
    <div>
      {
        users.map(
          user => 
            <User
              key={user.id}
              user={user}
            />
        )
      }
    </div>
  )
};

export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users);