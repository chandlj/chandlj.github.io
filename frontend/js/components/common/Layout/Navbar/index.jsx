import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ children }) {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById('navbar').style.top = '0';
    } else {
      document.getElementById('navbar').style.top = '-100px';
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <header>
      <nav className="navbar bg-transparent navbar-expand-lg fixed-top navbar-scroll w-full">
        <div className="max-w-full mx-auto px-4 sm:px-">
          <div className="flex justify-between items-center md:justify-start space-x-4 py-1 my-1 border-solid border-x-0 border-t-0 border-b-2 rounded-sm border-white">
            <div className="hidden md:flex items-center justify-center md:flex-1 lg:w-0">
              {children}
            </div>
          </div>
        </div>

      </nav>
    </header>
  );
}

Navbar.propTypes = {
  children: PropTypes.array.isRequired,
};
