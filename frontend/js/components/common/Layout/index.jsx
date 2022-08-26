import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import NavbarItem from './NavbarItem';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col bg-background">
      <Navbar>
        <NavbarItem dest="about">About</NavbarItem>
        <NavbarItem dest="work">Work</NavbarItem>
        <NavbarItem dest="contact">Contact</NavbarItem>
      </Navbar>
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};
