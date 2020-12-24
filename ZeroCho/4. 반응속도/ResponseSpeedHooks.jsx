import React, {Fragment, useState, Component} from 'react';
import { useRef } from 'react';
import './style.css';

const ResponseSpeed = () => {
  const [mode, setMode] = useState('waiting');
  const [message, setMessage] = useState('시작하려면 클릭하세요.');
  const [result ,setResult] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const onClickScreen = () => {
    if (mode === 'waiting') {
      setMode('ready'),
      setMessage('초록색이 되면 클릭하세요.')
      timeout.current = setTimeout(() => {
        setMode('now'),
        setMessage('지금 클릭하세요!')
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (mode === 'ready') {
      clearTimeout(timeout.current);
      setMode('waiting')
      setMessage('너무 성급했습니다. 다시 시작하려면 클릭하세요.')
    } else if (mode === 'now') {
      endTime.current = new Date();
      setMode('waiting')
      setMessage('시작하려면 클릭하세요.')
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current]
      })
    }
  }

  const onReset = () => {
    setResult([]);
  }

  const renderAvg = () => {
    return result.length === 0
      ? null
      : 
      <>
        <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
        <ul>
          {result.map((v, i) => {
            return (
              <li>{i+1}차 시도: {result[i]}ms</li>  
            )
          })}
        </ul>
        <button onClick={onReset}>리셋</button>
      </>
  }

  return (
    <>
      <div
      id="screen"
      className={mode}
      onClick={onClickScreen}
      >
        {message}
      </div>
      {renderAvg()}
    </>
  )
}

export default ResponseSpeed;