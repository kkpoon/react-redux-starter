import React, { Component } from 'react';
import Helmet from "react-helmet";

import Greeting from '../../../containers/greeting';
import Language from "../../../containers/language";
import Counter from "../../../containers/counter";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Helmet title="Home" />
        <Greeting />
        <Language />
        <Counter />
      </div>
    );
  }
}

module.exports = HomePage;
