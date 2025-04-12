import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Confirm, Alert } from './modals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Confirm/>
    <Alert/>
  </React.StrictMode>
);