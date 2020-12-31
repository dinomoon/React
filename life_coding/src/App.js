/* eslint-disable */

import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import TOC from './components/TOC';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import ReadContent from './components/ReadContent';
import UpdateContent from './components/UpdateContent';

function App() {
  // State
  let [mode, setMode] = useState('welcome');
  let [selectedId, setSelectedId] = useState(0);
  let [contents, setContents] = useState([
    {id: 1, title: 'HTML', desc: 'HTML is...'},
    {id: 2, title: 'CSS', desc: 'CSS is...'},
    {id: 3, title: 'JavaScript', desc: 'JavaScript is...'},
  ]);
  let [maxId, setMaxId] = useState(3);
  // End of State

  // getContent
  let getContent = () => {
    let content, article = null;
    let i = 0;
    switch (mode) {
      case 'welcome':
        article = <ReadContent
          title = 'Welcome Back!'
          desc = 'Come on!!'
        />
        break;
      case 'read':
        while (i < contents.length) {
          content = contents[i];
          if (content.id === selectedId) {
            break;
          }
          i++;
        }
        article = <ReadContent
          title = {content.title}
          desc = {content.desc}
        />
        break;
      case 'create':
        article = <CreateContent
          onSubmit={(title, desc) => {
            setMaxId(maxId + 1);
            let _contents = [...contents];
            _contents.push(
              {id: maxId, title: title, desc: desc}
            );
            setContents(_contents);
          }}
        />
        break;
      case 'update':
        i = 0;
        while (i < contents.length) {
          content = contents[i];
          if (content.id === selectedId) {
            break;
          }
          i++;
        }
        article = <UpdateContent
          content={content}
          onSubmit={(id, title, desc) => {
            content.title = title;
            content.desc = desc;
            let _contents = [...contents];
            _contents[id - 1] = content;
            setContents(_contents);
          }}
        />
        break;
      case 'delete':
        if (window.confirm("정말 삭제하시겠습니까?")) {
          let _contents = [...contents];
          let i = 0;
          while (i < _contents.length) {
            if (_contents[i].id === selectedId) {
              _contents.splice(i, 1);
              break;
            }
            i++;
          }
          setContents(_contents);
          setMode('welcome');
          setMaxId(maxId - 1);
        }
    }
    return article;
  }
  // End of getContent

  return (
    <Fragment>
      <Header
        onClick={() => {
          setMode('welcome')
        }}
      />
      <main>
        <TOC
          contents={contents}
          onClick={(id) => {
            setMode('read');
            setSelectedId(Number(id));
          }}
        />
        <Control
          onClick={(mode) => {
            setMode(mode);
          }}
        />
        {getContent()}
      </main>
    </Fragment>
  );
}

export default App;
