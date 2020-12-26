import React, {useState, useRef} from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({name: '', nickname: ''});

  const { name, nickname } = inputs;

  const inputRef = useRef();

  const onChange = (e) => {
    const { name, value } = e.target;

    // const nextInputs = {
    //   ...inputs
    // };
    // nextInputs[name] = value;

    // const nextInputs = {
    //   ...inputs,
    //   [name]: value,
    // };

    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    });
    inputRef.current.focus();
  }

  return (
    <div>
      <input 
        name="name"
        type="text"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={inputRef}
      />
      <input 
        name="nickname" 
        type="text" 
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  )
}

export default InputSample;