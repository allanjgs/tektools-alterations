import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ServerProvider } from './admin/Contexts/ServerContext';
import Header from './components/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ServerProvider>
        <App />
      </ServerProvider>
    </React.StrictMode>
  </BrowserRouter>
);
