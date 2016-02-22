'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routes from '../routes';

import configureStore from '../stores/configureStore.prod';
import IntlProvider from "../containers/connected-intl-provider";

const {store, history} = configureStore();

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
