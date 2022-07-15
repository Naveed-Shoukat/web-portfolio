import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// New method to render App
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

// Old method to render App
// ReactDOM.render(<App />, document.getElementById('root'));
