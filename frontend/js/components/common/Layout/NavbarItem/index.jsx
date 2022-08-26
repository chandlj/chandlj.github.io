import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

export default function NavbarItem({ children, dest }) {
  return (
    <div
      className={`
      border-transparent
      bg-transparent
      cursor-pointer

      text-black
      hover:opacity-80
      hover:bg-transparent

      transition-all
      duration-150

      text-xl
      mx-10
      mt-2
      `}
    >
      <Link
        to={dest}
        spy
        smooth
        duration={500}
      >
        <span>{children}</span>
      </Link>
    </div>
  );
}

NavbarItem.propTypes = {
  children: PropTypes.string.isRequired,
  dest: PropTypes.string.isRequired,
};
