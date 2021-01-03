## 04. JSX

1. 두개 이상의 태그가 있을 때는 감싸주어야한다.
2. {}를 사용해서 값을 보여준다.
3. style은 객체로 전달해야한다. class가 아니라 className을 사용한다.
4. 주석은 {/\* \*/} or //

## 05. props를 통해 컴포넌트에게 값 전달하기

- props: properties
- 구조 분해를 사용해서 props를 전달받을 수 있다.

```javascript
function Hello({ name, color }) {
  return (
    <h1
      style={{
        color,
      }}
    >
      안녕하세요 {name}
    </h1>
  );
}
```

- defaultProps를 사용해 기본값을 설정할 수 있다.

```jsx
Hello.defaultProps = {
  name: '이름없음',
};
```

- children을 사용해서 자식 컴포넌트들을 가져올 수 있다.

```jsx
function Wrapper({ children }) {
  const style = {
    border: '4px solid black',
    padding: 16,
  };

  return <div style={style}>{children}</div>;
}

export default Wrapper;

import './App.css';
import Hello from './05. props/Hello';
import Wrapper from './05. props/Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" />
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
```

## 06. 조건부 렌더링

- 삼항 연산자를 사용하거나 &&를 사용한다.

```jsx
function Hello({ name, color, isSpecial }) {
  return (
    <h1
      style={{
        color,
      }}
    >
      // 값을 단순히 보여주거나 안보여줄 때는 &&를 사용하는 것이 가독성에 좋다.
      {isSpecial ? <b>*</b> : null}
      {isSpecial && <b>*</b>}
      // true와 false에 따라 값이 변하는 것은 삼항연산자!
      {isSpecial ? <b>스페셜</b> : <b>낫스페셜</b>}
      안녕하세요 {name}
    </h1>
  );
}
```

- boolean값을 props로 넘겨줄 때, 이름만 넘겨줘도 true로 값을 넘겨주는 것과 같다.

```jsx
function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true} />
      <Hello color="pink" />
    </Wrapper>
  );
}

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial />
      <Hello color="pink" />
    </Wrapper>
  );
}
```

## 07. useState

- 값을 업데이트 할 때, 함수형으로 할 수도 있고 값을 넣어줄 수도 있다.
- 함수형으로 업데이트하는 것은 최적화와 관련이 있다. (뒤에서 배움)

```jsx
import React from 'react';
import { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const onDecrease = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
```

## 08. input 상태 관리하기

- value에 state를 사용한다면 반드시 onChange를 사용해서 state를 관리해야한다.

```jsx
import React, { useState } from 'react';

function InputSample() {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
  };

  return (
    <div>
      <input type="text" onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {text}
      </div>
    </div>
  );
}

export default InputSample;
```

## 09. 여러개의 input 상태 관리하기

- state를 객체로 만들어서 관리한다.

```jsx
import React, { useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({ name: '', nickname: '' });

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    // const nextInputs = {
    //   ...inputs
    // };
    // nextInputs[name] = value;

    // const nextInputs = {
    //   ...inputs,
    //   [name]: value,
    // };

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
  };

  return (
    <div>
      <input
        name="name"
        type="text"
        placeholder="이름"
        onChange={onChange}
        value={name}
      />
      <input
        name="nickname"
        type="text"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
```

## 10. useRef로 특정 DOM 선택하기

- 특정 엘리먼트의 크기나 위치, 스크롤바 위치, 포커스 설정 등등 다양한 상황에서 useRef를 사용한다.
- video 관련 라이브러리나, chart 관련 라이브러리를 사용할 때도 사용
- 렌더링과 관련 없는 변수를 다룰 때 사용하기도 한다.

## 11. 배열 렌더링하기

- map함수를 사용하기
- 반드시 key를 넣어줘야한다. (key가 있어야 효율적이다.)
- key의 값은 index를 사용하는 것보다 고유한 값을 사용하는 것이 성능에 좋다. (수정과 삭제가 없이 추가만 하는 배열이라면 index를 사용해도 된다.)

```jsx
import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.name}</b>
      <span>({user.email})</span>
    </div>
  );
}

function UserList() {
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
    },
  ];

  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
```

## 12. useRef로 컴포넌트 안의 변수 만들기

- let, const를 사용하면 값이 초기화 되고 state를 사용하면 렌더링 된다.
- 렌더링 되었을 때, 초기화 되지 않고 재렌더링이 되지 않아도 되는 변수는 useRef를 사용해 만들 수 있다.
- ex) setTimeout, setInterval의 id, 외부라이브러리를 사용하여 생성된 인스턴스, Scroll 위치 등등

## 13. 배열에 항목 추가하기

- state를 업데이트할 때는 spread문법을 사용하거나 concat문법을 사용해서 불변성을 지켜줘야한다.

## 14. 배열에 항목 제거하기

- filter를 사용해서 골라내 삭제하기

## 15. 배열에 항목 수정하기

- map을 사용해서 특정 항목을 선택가능

## 16. useEffect를 사용하여 마운트, 언마운트, 업데이트시 할 작업 설정하기

- useEffect를 사용하면 컴포넌트가 화면에 나타나게 될 때, 사라지게 될 때, props나 state가 바뀌어서 업데이트 될 때, 업데이트 되기 직전, 리렌더링 될 때마다 원하는 작업을 등록할 수 있다.

## 17. useMemo를 사용하여 연산한 값 재사용하기

- 컴포넌트의 성능을 최적화할 때 사용한다.

```jsx
const count = useMemo(() => countActiveUsers(users), [users]);
```

## 18. useCallback을 사용하여 함수 재사용하기

- useMemo랑 비슷한 것인데, 함수를 재사용할 수 있게 해준다. (deps의 값이 변할 때만 함수를 다시 실행시킴)

## 19. React.memo를 사용한 컴포넌트 리렌더링 방지

- React.memo를 사용하면 props가 바뀌었을 때만 리렌더링을 해준다.

```jsx
export default React.memo(CreateUser);

const User = React.memo(function User({ user, onRemove, onToggle }) {});
```

## 20. useReducer - 기초

- useReducer를 통해서도 useState처럼 상태를 설정할 수 있다.
- useReducer는 액션이라는 객체를 기반으로 상태를 업데이트한다.
- useReducer를 사용하면 상태 업데이트 로직을 컴포넌트 밖으로 분리 가능
- reducer: 상태를 업데이트하는 함수

```jsx
function reducer(state, action) {
  switch (action.type) {
    case: 'INCREMENT':
      return state + 1;
    case: 'DECREMENT':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

const [number, dispatch] = useReducer(reducer, 0);

const onIncrease = () => {
    dispatch({
      type: 'INCREMENT'
    })
  }

  const onDecrease = () => {
    dispatch({
      type: 'DECREMENT'
    })
  }
```

## 21. useReducer - App에서 useReducer 사용하기

- useReducer vs useState
- 정답은 없다. 상황에 따라 다르게 사용하자. (복잡-> useReducer, 단순->useState)

## 22. 커스텀 Hook 만들어서 사용하기

```jsx
import { useState, useCallback } from 'react';

function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, onChange, reset];
}

export default useInputs;
```

## 23. Context API를 사용한 전역 값 관리

- props를 전달하지 않아도 바로 사용할 수 있게 해줌

```jsx
import React, { createContext, useContext } from 'react';
import { useState } from 'react';

const MyContext = createContext('기본값');

function Child() {
  const text = useContext(MyContext);
  return <div>안녕하세요? {text}</div>;
}

function Prent() {
  return <Child />;
}
function GrandParent() {
  return <Prent />;
}
function ContextSample() {
  const [value, setValue] = useState(true);

  return (
    <MyContext.Provider value={value ? 'GOOD' : 'BAD'}>
      <GrandParent />
      <button onClick={() => setValue(!value)}>CLICK ME</button>
    </MyContext.Provider>
  );
}

export default ContextSample;
```

## 24. UserDispatch Context 만들기

```jsx
return (
  <UserDispatch.Provider value={dispatch}>
    <CreateUser />
    <UserList users={users} />
    <div>활성 사용자 수: {count}</div>
  </UserDispatch.Provider>
);
```
