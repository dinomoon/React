import React from 'react';

function User({user}) {
  return (
    <div>
      <b>{user.name}</b><span>({user.email})</span>
    </div>
  )
}

function UserList() {
  const users = [
    {
      id: 1,
      name: 'mk',
      email: 'ansrud1003@naver.com',
    },
    {
      id: 2,
      name: 'hj',
      email: 'heyjoo@google.com',
    },
    {
      id: 3,
      name: 'fr',
      email: 'vhfl@google.com',
    }
  ];

  return(
    <div>
      {
        users.map(
          user => <User user={user} key={user.id} />
        )
      }
    </div>
  )
};

export default UserList;