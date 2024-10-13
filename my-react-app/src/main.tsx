import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';

// Collega React all'elemento con id "app" nel DOM
const rootElement = document.getElementById('app');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
