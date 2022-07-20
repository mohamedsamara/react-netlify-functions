/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import 'styles/index.css';
import Routes from 'routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes />
    </Router>
  </React.StrictMode>,
);
