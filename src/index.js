import 'react-app-polyfill/ie9';
import 'core-js/fn/array/find';
import 'core-js/fn/array/includes';
import 'core-js/fn/number/is-nan';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ServiceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
ServiceWorker();
