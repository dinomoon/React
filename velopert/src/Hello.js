import React, { Component } from 'react'
import './App.css';

export class Hello extends Component {
  render() {
    return (
      <div className="header">
        <h1>Hello, {this.props.name}</h1>
      </div>
    )
  }
}

export default Hello
