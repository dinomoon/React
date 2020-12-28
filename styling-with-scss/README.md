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
