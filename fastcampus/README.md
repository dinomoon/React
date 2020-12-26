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
  name: "이름없음",
};
```

- children을 사용해서 자식 컴포넌트들을 가져올 수 있다.

```jsx
function Wrapper({ children }) {
  const style = {
    border: "4px solid black",
    padding: 16,
  };

  return <div style={style}>{children}</div>;
}

export default Wrapper;

import "./App.css";
import Hello from "./05. props/Hello";
import Wrapper from "./05. props/Wrapper";

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
