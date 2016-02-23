'use strict';

import React, { Component } from 'react';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

import routes from '../routes';
import reducers from "../reducers";
import IntlProvider from "../containers/connected-intl-provider";

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  compose(
    applyMiddleware(thunk)
  )
);

const history = syncHistoryWithStore(browserHistory, store);

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
        </div>
      </Provider>
    );
  }

}

export default Root;
