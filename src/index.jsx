'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
import createHistory from 'history/lib/createHashHistory';

import reducers from './reducers';
import routes from './routes';

const REDUCERS_WITH_ROUTES = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));
const STORE = createStore(REDUCERS_WITH_ROUTES);
const HISTORY = createHistory({queryKey: false});

syncReduxAndRouter(HISTORY, STORE);

ReactDOM.render(
  <Provider store={STORE}>
    <div>
      <Router history={HISTORY}>
        {routes}
      </Router>
    </div>
  </Provider>,
  document.getElementById('react-root')
);
