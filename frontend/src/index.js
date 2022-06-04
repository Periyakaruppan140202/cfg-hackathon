import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5600/';

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    const tokenConfig = config;
    const token = localStorage.getItem('token');
    if (token) {
      tokenConfig.headers.Authorization = `Bearer ${token}`;
    }
    return tokenConfig;
  },
  error => {
    // Do something with request error
    return Promise.reject(error.data.msg);
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
