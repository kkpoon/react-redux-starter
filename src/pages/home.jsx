'use strict';
import colors from "material-colors";

import React, { Component } from 'react';

import GreetingContainer from '../containers/greeting';
import SayContainer from '../containers/say';
import HelloContainer from '../containers/hello';
import CounterContainer from '../containers/counter';
import GreetingCard from '../components/greeting-card';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--8-col">
            <GreetingContainer title="Greeting" />
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <CounterContainer />
          </div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--8-col">
            <HelloContainer
              title="Hello"
              titleBackgroundColor={colors.pink[300]}
              titleFontColor={colors.black}
            />
          </div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--8-col">
            <SayContainer
              title="Say"
              titleBackgroundColor={colors.amber[500]}
              titleFontColor={colors.black}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
