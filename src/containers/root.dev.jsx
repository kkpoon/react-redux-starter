'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routes from '../routes';

import configureStore from '../stores/configureStore.dev';
import DevTools from '../containers/dev-tools';

const {store, history} = configureStore();

class Root extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            {routes}
          </Router>
          <DevTools />
        </div>
      </Provider>
    );
  }

}

export default Root;
