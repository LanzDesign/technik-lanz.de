import React from 'react';
import { createRoot } from 'react-dom/client';
import TechnikLanzApp from './TechnikLanzApp';
import './root.css';

// Find the root element and render the React application.
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <TechnikLanzApp />
  </React.StrictMode>
);
