### 04. JSX

1. 두개 이상의 태그가 있을 때는 감싸주어야한다.
2. {}를 사용해서 값을 보여준다.
3. style은 객체로 전달해야한다. class가 아니라 className을 사용한다.
4. 주석은 {/\* \*/} or //

### props를 통해 컴포넌트에게 값 전달하기

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
