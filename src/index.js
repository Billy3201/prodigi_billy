import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Fonts/Montserrat-Regular.ttf'
import './Fonts/Montserrat-Medium.ttf'
import './Fonts/Montserrat-Bold.ttf'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);