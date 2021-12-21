/* eslint
  react/jsx-filename-extension: "off",
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom';

import App from './App';
import Home from './components/Home';

ReactDOM.render(
  <Router>
    <App>
      <RouterRoutes>
        <Route path="/" element={<Home />} />
      </RouterRoutes>
    </App>
  </Router>,
  document.getElementById('root')
);
