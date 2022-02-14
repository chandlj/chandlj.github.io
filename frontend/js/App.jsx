import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import baseTheme from './theme';
import './index.scss';

export default function App({ children }) {
  return (
    // <ThemeProvider theme={baseTheme}>
    // <CssBaseline>
    // </CssBaseline>
    // </ThemeProvider>
    <>
      {children}
    </>
  );
}

App.propTypes = {
  children: PropTypes.any.isRequired,
};
