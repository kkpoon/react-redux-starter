import React from "react";
import ReactDOM from "react-dom";
import { addLocaleData } from "react-intl";
import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import { hashHistory, browserHistory } from "react-router";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";

import routes from "./routes";
import * as reducers from "./reducers";

import Root from "./containers/root";

import en from "react-intl/locale-data/en";
import zh from "react-intl/locale-data/zh";

addLocaleData(en);
addLocaleData(zh);

// Safari patch
if (!global.Intl)
  require.ensure(["intl"], require => {
    require("intl").default;
    bootstrap();
  }, "IntlBundle");
else bootstrap();

function bootstrap() {
  const storeEnhancers = [];
  const extensions = [];

  if (__DEVTOOLS__) {
    const DevTools = require("./components/dev-tools").default;
    storeEnhancers.push(DevTools.instrument());
    extensions.push(<DevTools key="devtools" />);
  }

  const createHistory = process.env.NODE_ENV === "production" ?
    hashHistory : browserHistory;

  const store = createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer,
    }),
    compose(
      //applyMiddleware(),
      ...storeEnhancers
    )
  );

  const history = syncHistoryWithStore(createHistory, store);
  
  ReactDOM.render(
    <Root store={store} history={history} routes={routes} extensions={extensions} />,
    document.getElementById("react-root")
  );
}
