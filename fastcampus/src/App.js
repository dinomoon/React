import React, {useRef, useMemo, useCallback, useReducer, createContext} from 'react';
import CreateUser from './15. 배열에 항목 수정하기/CreateUser';
import UserList from './15. 배열에 항목 수정하기/UserList';
import useInputs from './useInputs';
import produce from 'immer';

window.produce = produce;

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는 중...");
  return users.filter(user => user.active).length;
}

const initialState = {
  // inputs: {
  //   username: '',
  //   email: '',
  // },
  users: [
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
  ]
}

function reducer(state, action) {
  switch (action.type) {
    // case 'CHANGE_INPUT':
    //   return {
    //     ...state,
    //     inputs: {
    //       ...state.inputs,
    //       [action.name]: action.value
    //     }
    //   }
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user => 
          user.id === action.id
            ? {...user, active: !user.active}
            : user
          )
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      throw new Error('Unhandled action');
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [form, onChange, reset] = useInputs({username: '', email: ''})
  // const nextId = useRef(4);
  const { users } = state;
  // const { username, email } = state.inputs;
  // const { username, email } = form;

  // const onChange = useCallback(e => {
  //   const { name, value } = e.target;
  //   dispatch({
  //     type: 'CHANGE_INPUT',
  //     name,
  //     value
  //   })
  // }, [])

  // const onCreate = useCallback(() => {
  //   dispatch({
  //     type: 'CREATE_USER',
  //     user: {
  //       id: nextId.current,
  //       username,
  //       email,
  //     }
  //   });
  //   nextId.current += 1;
  //   reset();
  // }, [username, email, reset])

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>
        활성 사용자 수: {count}
      </div>
    </UserDispatch.Provider>
  );
}

export default App;
