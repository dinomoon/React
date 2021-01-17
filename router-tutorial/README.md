## 01. 프로젝트 준비 및 기본적인 사용법

- react-router-dom 설치
- App컴포넌트를 BrowserRouter로 감싸주기

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
```

- Link와 Route 사용하기

```jsx
import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact></Route>
      <Route path="/about" component={About}></Route>
    </div>
  );
}

export default App;
```

## 02. URL 파라미터와 Query 파라미터

- URL 파라미터

```jsx
// App.js
import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/profile/:username" component={Profile}></Route>
    </div>
  );
}

export default App;
```

```jsx
// Profile.jsx
import React from 'react';

const profileData = {
  velopert: {
    name: '김민준',
    description: 'Frontend Engineer',
  },
  homer: {
    name: '호머 심슨',
    description: '심슨 가족에 나오는 아빠 역할 캐릭터',
  },
};

// localhost:3000/profile/:username
// localhost:3000/profile/velopert
// URL 파라미터를 사용할 때는 라우트로 사용되는 컴포넌트에서 받아 오는 match라는 객체 안의 params 값을 참조한다.
function Profile({ match }) {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;
```

- Query 파라미터

```jsx
// About.jsx
import React from 'react';
import qs from 'qs';

// 쿼리는 location 객체에 들어있는 search값에서 조회할 수 있다.
function About({ location }) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  // localhost:3000/about?datail=true
  // console.log(location.search)
  // ?detail=true
  // console.log(query);
  // {detail:'true'}
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
```
