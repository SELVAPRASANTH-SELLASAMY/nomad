import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Confirm, Alert, Loading } from './modals';
createRoot(document.getElementById('root'))
.render(
  <StrictMode>
    <App />
    <Confirm/>
    <Alert/>
    <Loading/>
  </StrictMode>
);