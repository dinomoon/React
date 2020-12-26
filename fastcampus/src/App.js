import './App.css';
import Hello from './06. 조건부 렌더링/Hello'
import Wrapper from './06. 조건부 렌더링/Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial/>
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;
