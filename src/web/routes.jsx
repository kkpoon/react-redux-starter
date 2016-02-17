'use strict';

import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import { DefaultMaterialDesignLayout } from './layouts';
import { Home, Feature1, Feature2 } from './pages';

const ROUTES = (
  <Route path="/" component={DefaultMaterialDesignLayout}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="feature1" component={Feature1} />
    <Route path="feature2" component={Feature2} />
  </Route>
);

export default ROUTES;
