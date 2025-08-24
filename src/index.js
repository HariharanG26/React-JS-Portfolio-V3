import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/base.css';
import './styles/variables.css';
import './styles/themes.css';
import './styles/layout.css';
import './styles/utilities.css';
import './styles/animations.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* App component renders Routes */}
  </React.StrictMode>
);

reportWebVitals();
