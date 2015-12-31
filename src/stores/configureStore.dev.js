'use strict';

import { compose, createStore, combineReducers } from 'redux';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
import createHistory from 'history/lib/createHashHistory';

import reducers from '../reducers';
import DevTools from '../containers/dev-tools';

const finalCreateStore = compose(
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
};

export default configureStore;
