import React, { Component } from 'react';
import Helmet from "react-helmet";

import GreetingContainer from '../../../containers/greeting';
import LanguageContainer from "../../../containers/language";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Helmet title="Home" />
        <GreetingContainer />
        <LanguageContainer />
      </div>
    );
  }
}

module.exports = HomePage;
