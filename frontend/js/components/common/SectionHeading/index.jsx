import React from 'react';
import PropTypes from 'prop-types';

export default function SectionHeading({ heading, color }) {
  const headerStyle = `
    flex md:text-left relative text-center mb-10 whitespace-nowrap
    after:bg-surface after:relative after:h-[1px] after:top-6 after:ml-10 after:content-[''] after:w-1/2 after:block
    before:bg-surface before:relative before:h-[1px] before:top-6 before:mr-10 before:content-[''] before:w-1/2 before:block
    md:before:w-0 md:before:mr-0 md:after:w-full
    ${color}
  `;
  return <h1 className={headerStyle}>{heading}</h1>;
}

SectionHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  color: PropTypes.string,
};

SectionHeading.defaultProps = {
  color: 'text-primary',
};
