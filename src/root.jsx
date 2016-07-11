import React, { Component, PropTypes } from "react";
import { Provider, connect } from "react-redux";
import { Router } from "react-router";
import { IntlProvider } from "react-intl";

function Root({ store, history, routes, extensions } ) {
  return (
    <Provider store={store}>
      <div>
        <MyIntlProvider>
          <Router history={history} routes={routes} />
        </MyIntlProvider>
        {extensions}
      </div>
    </Provider>
  );
}

const MyIntlProvider = connect((state) => {
  return {
    locale: state.language.get("locale"),
    messages: state.language.get("messages"),
    key: state.language.get("locale"),
  };
})(IntlProvider);

module.exports = Root;
