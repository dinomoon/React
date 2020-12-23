import React, {useState} from 'react';
import './style.css';

const ResponseSpeed = () => {
  const [mode, setMode] = useState('waiting');
  const [text, setText] = useState('시작하려면 클릭하세요.');
  const [result, setResult] = useState([]);

  let timeout = 0;
  let startTime, endTime;

  const onClickScreen = () => {
    if (mode === 'waiting') {
      setMode('ready');
      setText('초록색이 되면 클릭하세요.');
      timeout = setTimeout(() => {
        setMode('now');
        setText('지금 클릭하세요!');
        startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (mode === 'ready') {
      clearTimeout(timeout);
      setMode('waiting');
      setText('너무 성급했어요!');
    } else if (mode === 'now') {
      endTime = new Date();
      setMode('waiting');
      setText('시작하려면 클릭하세요.')
    }
  }

  return (
    <div className={mode} onClick={onClickScreen}>
      {text}
    </div>
  )
};

export default ResponseSpeed;