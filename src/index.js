import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Providercontxt } from './Hooks/Context/MainContext';

ReactDOM.render(
  <Providercontxt>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Providercontxt>
  
  ,
  document.getElementById('root')
);


