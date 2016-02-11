'use strict';

import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
import thunk from 'redux-thunk';
import createHistory from 'history/lib/createHashHistory';

import reducers from '../reducers';
import DevTools from '../components/dev-tools';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  DevTools.instrument()
)(createStore);

function configureStore(initialState) {
  let reducersWithRoutes = combineReducers(Object.assign({}, reducers, {
    routing: routeReducer
  }));
  let store = finalCreateStore(reducersWithRoutes);
  let history = createHistory({queryKey: false});

  syncReduxAndRouter(history, store);

  return {store, history};
}

export default configureStore;
