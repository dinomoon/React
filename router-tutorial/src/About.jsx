import React from 'react';
import qs from 'qs';

function About({ location }) {
  console.log(location);
  console.log(location.search);

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  console.log(query);
  const detail = query.detail === 'true';

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 페이지입니다.</p>
      {detail && <p>detail값이 true입니다!</p>}
    </div>
  );
}

export default About;
