/* global __DEVTOOLS__ */

import React, { Component } from 'react';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, hashHistory, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

import routes from './routes';
import * as reducers from "./reducers";
import IntlProvider from "./containers/connected-intl-provider";

const storeEnhancers = [];
const extensions = [];

if (__DEVTOOLS__) {
  const DevTools = require('./components/dev-tools').default;
  storeEnhancers.push(DevTools.instrument())
  extensions.push(<DevTools key="devtools" />);
}

const createHistory = process.env.NODE_ENV === 'production' ?
  hashHistory : browserHistory

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  compose(
    applyMiddleware(thunk),
    ...storeEnhancers
  )
);

const history = syncHistoryWithStore(createHistory, store);

class Root extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <IntlProvider>
            <Router history={history} routes={routes}/>
          </IntlProvider>
          {extensions}
        </div>
      </Provider>
    );
  }

}

export default Root;
