const React = require('react');
const ReactDOM = require('react-dom');

import {hot} from 'react-hot-loader/root';
import ResponseSpeed from'./ResponseSpeed';

const Hot = hot(ResponseSpeed)

ReactDOM.render(<Hot/>, document.querySelector('#root'));