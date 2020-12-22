const React = require('react');
const {useState} = React;

const WordRelay = () => {
  // state = {
  //   text: "고양이",
  //   value: '',
  //   result: '',
  // }
  const [text, setText] = useState('고양이');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onChangeInput = (e) => {
    setValue(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (text[text.length-1] === value[0]) {
      setText(value);
      setValue('');
      setResult('딩동댕')
    } else {
      setValue('');
      setResult('땡')
    }
  }

  return (
    <>
      <h1>{text}</h1>
      <form action="" onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChangeInput}/>
        <input type="submit"/>
      </form>
      <div>
        {result}
      </div>
    </>
  )
}

module.exports = WordRelay;