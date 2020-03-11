import React, { Component } from 'react'

export class Counter extends Component {
  state = {
    number: 0
  }

  handleIncrease = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  }

  handleDecrease = () => {
    const { number } = this.state;
    this.setState({
      number: number - 1
    });
  }

  render() {
    return (
      <div className="center">
        <h1>Counter</h1>
        <div>number: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    )
  }
}

export default Counter