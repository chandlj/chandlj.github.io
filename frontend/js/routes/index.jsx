import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';

import Home from './Home';

export default function Routes(props) {
  return (
    <RouterRoutes>
      <Route path='/' element={<Home />} />
    </RouterRoutes>
  );
}