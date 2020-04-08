import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import '../public/index.html';

import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from 'react-router-dom';

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));
/* ReactDOM.render(<Header />, document.getElementById('root'));
ReactDOM.render(<Menu />, document.getElementById('root')); */



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
