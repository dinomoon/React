const React = require('react');
const ReactDOM = require('react-dom');

import {hot} from 'react-hot-loader/root';
import RSP from'./RSP';

const Hot = hot(RSP)

ReactDOM.render(<Hot/>, document.querySelector('#root'));