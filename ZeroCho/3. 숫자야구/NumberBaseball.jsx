import React, {useState, memo} from 'react';
import Try from './Try';

function getNumbers() {
  const candidate = [1,2,3,4,5,6,7,8,9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

const NumberBaseball = memo(() => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  }
  
  const onSubmitForm = (e) => {
    e.preventDefault();
    let answerStr = answer.join('')
    if (value === answerStr) {
      setResult("홈런");
      //setTries([...tries, {try: value, result: '홈런!'}]);
      setTries((prevTries) => {
        return [...prevTries, {try:value, result: '홈런!'}]
      });
      alert('게임을 다시 시작합니다.');
      setValue('');
      setAnswer(getNumbers());
      setTries([]);
    } else {
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번 이상 틀려서 실패! 답은 ${answerStr}였습니다.`);
        // setTries([...tries, {try: value, result: result}]);
        alert('게임을 다시 시작합니다!')
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
      } else {
        for (let i = 0; i < 4; i++) {
          if (value[i] === answerStr[i]) {
            strike++;
          } else if (answerStr.includes(value[i])){
            ball++;
          }
        }
        //setTries([...tries, {try: value, result: result}]);
        setTries((prevTries) => {
          return [...prevTries, {try:value, result: `${strike}스트라이크, ${ball}볼입니다.`}]
        });
        setValue('');
      }
    }
  }

  return (
    <>
      <h1>{result}</h1>
      <form action="" onSubmit={onSubmitForm}>
        <input type="text" maxLength="4" value={value} onChange={onChangeInput}/>
        <input type="submit"/>
      </form>
      <h2>시도: {tries.length}</h2>
      <ul>
        {tries.map((v, i) => {
          return (
            <Try key={`${i+1}차 시도: `} tryInfo={v} />
          )
        })}
      </ul>
    </>
  )
});

export default NumberBaseball;