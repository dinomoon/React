## 02. size props 설정하기

```jsx
import React from "react";
import "./Button.scss";
import classNames from "classnames";

function Button({ children, size }) {
  return <button className={classNames("Button", size)}>{children}</button>;
}

Button.defaultProps = {
  size: "medium",
};

export default Button;
```

## 03. color props 설정하기

```jsx
import React from "react";
import "./Button.scss";
import classNames from "classnames";

function Button({ children, size, color }) {
  return (
    <button className={classNames("Button", size, color)}>{children}</button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue",
};
```

## 04. outline, fullWidth props 설정하기

```jsx
import React from "react";
import "./Button.scss";
import classNames from "classnames";

function Button({ children, size, color, outline, fullWidth }) {
  return (
    <button
      className={classNames("Button", size, color, { outline, fullWidth })}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue",
};
```

## 05. rest props 전달하기

```jsx
import React from "react";
import "./Button.scss";
import classNames from "classnames";

function Button({ children, size, color, outline, fullWidth, ...rest }) {
  return (
    <button
      className={classNames("Button", size, color, { outline, fullWidth })}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue",
};
```

```jsx
import "./App.scss";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="gray">
          BUTTON
        </Button>
        <Button color="gray">BUTTON</Button>
        <Button size="small" color="gray">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="pink">
          BUTTON
        </Button>
        <Button color="pink">BUTTON</Button>
        <Button size="small" color="pink">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" outline>
          BUTTON
        </Button>
        <Button color="gray" outline>
          BUTTON
        </Button>
        <Button size="small" color="pink" outline>
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" fullWidth>
          BUTTON
        </Button>
        <Button size="large" color="gray" fullWidth>
          BUTTON
        </Button>
        <Button
          size="large"
          color="pink"
          fullWidth
          onClick={() => console.log("클릭")}
          onMouseMove={() => console.log("마우스 무브")}
        >
          BUTTON
        </Button>
      </div>
    </div>
  );
}

export default App;
```

## 06. CSS Module

- CSS Module을 사용하면 클래스 이름이 중복되는 것을 방지할 수 있다.

```jsx
import React from "react";
import styles from "./Box.module.css";

function Box() {
  return <div className={styles.Box}>{styles.Box}</div>;
}

export default Box;
```

- 사용하는 경우

  1. 레거시 프로젝트에 리액트를 도입할 때
  2. CSS 클래스 네이밍 규칙 만들기 귀찮을 때

- scss에서도 사용가능
- global 클래스 네임을 선언하고 싶다? :global

## 07. Styled components

- css in js
- Tagged Template Literal
- 컴포넌트 안에 직접 스타일 작성 가능

```jsx
import React from "react";
import styled from "styled-components";

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: black;
  border-radius: 50%;
`;

function App() {
  return <Circle />;
}

export default App;
```
