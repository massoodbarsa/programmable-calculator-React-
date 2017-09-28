import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App.js';
import {Router,browserHistory} from 'react-router'
import Routes from './routes/index.js'




ReactDOM.render(
  <Router
   history={browserHistory}
   routes={Routes}

  />,
  // <App />,
  document.getElementById('root'));
