import React from 'react';

import './styles.scss';

export default function Nav() {
  return (
    <div id="nav">
      <div className="header-content">
        <h1>Header Title</h1>
        <div className="nav-list">
          <ol>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li>
              <a>Work</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
