import React, { Component, PropTypes } from "react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import IntlProvider from "./connected-intl-provider";

class Root extends Component {
  render() {
    const { store, history, routes, extensions } = this.props;
    return (
      <Provider store={store}>
        <div>
          <IntlProvider>
            <Router history={history} routes={routes} />
          </IntlProvider>
          {extensions}
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  routes: PropTypes.object,
  extensions: PropTypes.array
};

export default Root;
