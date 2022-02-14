/* eslint
  react/jsx-filename-extension: "off",
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom';

import App from './App';
import Hero from './components/Hero';
import About from './components/About';
import Layout from './components/Layout';
import Work from './components/Work';

const Home = () => (
  <Layout>
    <Hero />
    <About />
    <Work />
  </Layout>
);

ReactDOM.render(
  <Router>
    <App>
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/test" element={<Test />} /> */}
      </RouterRoutes>
    </App>
  </Router>,
  document.getElementById('root')
);
