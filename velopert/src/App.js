import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Counter from './Counter';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '김민준',
        phone: '010-1234-1234'
      },
      {
        id: 1,
        name: '최문경',
        phone: '010-2134-1242'
      }
    ],
    keyword: ''
  }
  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
          ? { ...info, ...data }
          : info
      )
    })
  }
  render() {
    const { information, keyword } = this.state
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return (
      <Fragment>
        <Hello name="mun"/>
        <Counter />
        {/* App > PhoneForm, PhoneInfoList */}
        {/* PhoneInfoList > PhoneInfo */}
        <PhoneForm onCreate={this.handleCreate}/>
        <p>
          <input 
            placeholder="검색 할 이름을 입력하세요.." 
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <PhoneInfoList
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </Fragment>
    );
  }
}

export default App;