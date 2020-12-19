/* eslint-disable */

import React, {useState} from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState(['수원 맛집', '양산 맛집', '노트북 추천']);
  let [like, setLike] = useState(0);

  return (
    <div className="App">
      <nav className="black-nav">
        <h1>개발 Blog</h1>
      </nav>
      <section>
        <button onClick={() => {
            setTitle(
              ['강남 맛집', '양산 맛집', '노트북 추천']
            )
          }}>
          버튼
        </button>
        <ul>
          <li className="item">
            <h2>{title[0]}
              <span className="like" onClick={() => {setLike(like+1)}}>
                👍{like}
              </span>
            </h2>
            <p>글 내용</p>
          </li>
          <li className="item">
            <h2>{title[1]}</h2>
            <p>글 내용</p>
          </li>
          <li className="item">
            <h2>{title[2]}</h2>
            <p>글 내용</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
