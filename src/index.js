import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <App saludo="Saludo desde index.js" >
    Buenas desde dentro de app
  </App>,
  document.getElementById('root')
);