'use strict';

import React, { Component } from 'react';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

import routes from './routes';
import reducers from "./reducers";
import IntlProvider from "./containers/connected-intl-provider";
import DevTools from './containers/dev-tools';

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  compose(
    applyMiddleware(thunk),
    DevTools.instrument()
  )
);

const history = syncHistoryWithStore(hashHistory, store);

class Root extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <IntlProvider>
            <Router history={history}>
              {routes}
            </Router>
          </IntlProvider>
          <DevTools />
        </div>
      </Provider>
    );
  }

}

export default Root;
