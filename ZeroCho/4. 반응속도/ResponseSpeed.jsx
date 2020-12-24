import React, {Fragment, useState, Component} from 'react';
import { useRef } from 'react';
import './style.css';

class ResponseSpeed extends Component {
  state = {
    mode: 'waiting',
    message: '시작하려면 클릭하세요.',
    result: []
  }

  timeout;
  startTime;
  endTime;

  onClickScreen = () => {
    const {mode, message, result} = this.state;
    if (mode === 'waiting') {
      this.setState({
        mode: 'ready',
        message: '초록색이 되면 클릭하세요.'
      });
      this.timeout = setTimeout(() => {
        this.setState({
          mode: 'now',
          message: '지금 클릭하세요!'
        })
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (mode === 'ready') {
      clearTimeout(this.timeout);
      this.setState({
        mode: 'waiting',
        message: '너무 성급했습니다. 다시 시작하려면 클릭하세요.'
      })
    } else if (mode === 'now') {
      this.endTime = new Date();
      this.setState((prevState) => {
        return {
          mode: 'waiting',
          message: '시작하려면 클릭하세요',
          result: [...prevState.result, this.endTime - this.startTime],
        }
      })
    }
  }

  onReset = () => {
    this.setState({
      result: [],
    })
  }

  renderAvg = () => {
    const {result} = this.state;
    return result.length === 0
      ? null
      : 
      <>
        <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
        <ol>
          {result.map((v, i) => {
            return (
              <li>{result[i]}ms</li>  
            )
          })}
        </ol>
        <button onClick={this.onReset}>리셋</button>
      </>
  }

  render() {
    const {mode, message} = this.state;
    return (
      <>
        <div
        id="screen"
        className={mode}
        onClick={this.onClickScreen}
        >
          {message}
        </div>
        {this.renderAvg()}
      </>
    )
  }
}

export default ResponseSpeed;