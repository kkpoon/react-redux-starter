import "react-mdl/extra/material";
import "react-mdl/extra/material.css";
import "./themes/default-md-layout.css";

import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData } from "react-intl";
import WebFont from "webfontloader";

import Root from './root';

import en from "react-intl/locale-data/en";
import zh from "react-intl/locale-data/zh";

WebFont.load({
  google: {
    families: [
      "Roboto:300,400,500,700:latin",
      "Roboto+Condensed:400,300,700:latin",
      "Material+Icons"
    ]
  },
  timeout: 5000
});

addLocaleData(en);
addLocaleData(zh);

// Safari patch
if (!global.Intl)
  require.ensure(['intl'], require => {
    require('intl').default
    bootstrap()
  }, 'IntlBundle')
else bootstrap()

function bootstrap() {
  ReactDOM.render(
    <Root />,
    document.getElementById('react-root')
  );
}
