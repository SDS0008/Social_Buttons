import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Server from './components/Server';
import reportWebVitals from './reportWebVitals';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Server />
  </React.StrictMode>
);

reportWebVitals();
