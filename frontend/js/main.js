/* eslint
  react/jsx-filename-extension: "off",
*/

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes as RouterRoutes,
  Route,
} from 'react-router-dom';

import App from './App';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Layout from './components/common/Layout';
import Work from './components/sections/Work';
import Contact from './components/sections/Contact';

const Home = () => (
  <Layout>
    <Hero />
    <About />
    <Work />
    <Contact />
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
