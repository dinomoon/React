import React from 'react';

function CreateUser({username, email, onChange, onCreate}) {
  return (
    <div>
      <input
        type="text"
        name="username" 
        placeholder="username"
        value={username}
        onChange={onChange}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={onChange}
      />
      <button onClick={onCreate}>추가</button>
    </div>
  )
}

export default React.memo(CreateUser);