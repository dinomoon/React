const React = require('react');
const ReactDOM = require('react-dom');

import {hot} from 'react-hot-loader/root';
import ResponseSpeedHooks from'./ResponseSpeedHooks';

const Hot = hot(ResponseSpeedHooks)

ReactDOM.render(<Hot/>, document.querySelector('#root'));