'use strict';

import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import Layout from './components/default-layout';
import Home from './components/pages/home';

const ROUTES = (
  <Route path="/" component={Layout}>
    <Route path="home" component={Home} />
    <IndexRoute component={Home} />
  </Route>
);

export default ROUTES;
