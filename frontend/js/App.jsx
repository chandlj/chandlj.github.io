import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export default function App({ children }) {
  return <>{children}</>;
}

App.propTypes = {
  children: PropTypes.any.isRequired,
};
