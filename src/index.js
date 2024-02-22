// Import everything
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserRouter as Router } from 'react-router-dom';



const container =  document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
  <App />
</Router>
);

serviceWorkerRegistration.register();
