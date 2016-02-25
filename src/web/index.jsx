'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData } from "react-intl";

import Root from './root';

import en from "react-intl/lib/locale-data/en";
import zh from "react-intl/lib/locale-data/zh";

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
