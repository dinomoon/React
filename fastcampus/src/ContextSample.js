import React, { createContext, useContext } from 'react';
import { useState } from 'react';

const MyContext = createContext('기본값')

function Child() {
  const text = useContext(MyContext);
  return <div>안녕하세요? {text}</div>
}

function Prent() {
  return <Child />
}
function GrandParent() {
  return <Prent />
}
function ContextSample() {
  const [value, setValue] = useState(true);

  return (
    <MyContext.Provider value={value ? "GOOD" : "BAD"}>
      <GrandParent />
      <button onClick={() => setValue(!value)}>CLICK ME</button>
    </MyContext.Provider>
  )
}

export default ContextSample;