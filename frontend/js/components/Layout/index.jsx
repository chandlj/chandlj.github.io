import React from 'react';
import Nav from './Nav';

import './styles.scss';

export default function Layout({ children }) {
  return (
    <div className="content-container">
      <Nav />
      <div id="content">
        {children}
      </div>
    </div>
  );
}
