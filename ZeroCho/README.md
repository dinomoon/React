# 제로초 리액트 강의를 보고 정리한 내용

### 1-1 리액트를 쓰는 이유

1. 사용자 경험 향상 (로딩화면 없이 바로 화면이 바뀐다(앱처럼))
2. 재사용 컴포넌트 (유지보수가 편하다.)
3. 데이터와 화면을 일치하는 것이 편하다.(자바스크립트보다 편하다.)

### 1-9 함수형 setState

- setState안에 this.state가 들어간다면 함수형으로 써서 prevState를 사용하자!

### 2-2 Class와 Hooks비교하기

- 리액트에서는 Hooks를 사용하는 것을 권장한다.

### 2-3 웹팩 설치하기

- 웹팩: 수많은 js파일들을 하나로 합쳐준다.
- node는 서버가 아니라 JavaScript 실행기 그 이상 그 이하도 아니다.
- 리액트를 할 때 node를 알아야 하는 이유는 웹팩을 사용해야 하는데 웹팩은 node로 실행하기 때문이다.

### 3-10 shouldComponentUpdate

- 성능 향상을 위해 shouldComponentUpdate, PureComponent, memo를 적절히 사용하자

### 4-1 React 조건문

- return 안에서 조건문을 사용해야할 때는 삼항연산자를 사용하면 된다.

### 4-4 반응속도체크 Hooks로 전환하기

- 값이 바뀌어도 렌더링이 일어나지 않기를 원한다면 그 값은 useRef()를 사용한다.

### 5-1 리액트 라이프사이클 소개

- 클래스의 경우: constructor -> render -> ref -> componentDidMount ->
- (state, props 변경될 때 -> shouldComponentUpdate(true) -> render ->componentDidUpdate ->)
- (부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸)

### 5-6 클래스와 Hooks 라이프사이클 비교

- 클래스에서는 componentDidMount, componentDidUpdate, componentWillUnmount를 사용하고, Hooks에서는 useEffect를 사용한다.
