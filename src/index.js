import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Confirm, Alert, Loading } from './modals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Confirm/>
    <Alert/>
    <Loading/>
  </React.StrictMode>
);