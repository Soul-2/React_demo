import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import App from './App';
import Router from './router/index.js'

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App name="soul" />, document.getElementById('root'));

ReactDOM.render(
  <Router />
  , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
