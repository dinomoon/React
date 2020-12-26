import './App.css';
import Hello from './05. props/Hello'
import Wrapper from './05. props/Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red"/>
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;
