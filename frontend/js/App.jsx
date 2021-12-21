import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

import baseTheme from './theme';

export default function App({ children }) {
  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline>
        {children}
      </CssBaseline>
    </ThemeProvider>
  );
}

App.propTypes = {
  children: PropTypes.any.isRequired,
};
