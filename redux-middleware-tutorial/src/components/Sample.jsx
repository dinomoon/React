import React from 'react';

const Sample = ({ loadingPost, loadingUsers, post, users }) => {
  return (
    <div>
      <section>
        <h2>포스트</h2>
        {loadingPost && '로딩 중...'}
        {!loadingPost && post && (
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        )}
      </section>
      <hr />
      <section>
        <h2>사용자 목록</h2>
        {loadingUsers && '로딩 중...'}
        {!loadingUsers && users && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.username} ({user.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Sample;
