'use strict';
import colors from "material-colors";

import React, { Component } from 'react';

import GreetingContainer from '../containers/greeting';
import SayContainer from '../containers/say';
import HelloContainer from '../containers/hello';
import CounterContainer from '../containers/counter';
import FalcorHelloContainer from '../containers/falcorhello';
import GithubContainer from "../containers/github";
import GreetingCard from '../components/greeting-card';
import StandardCard from "../components/mdl/card/standard-card";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--7-col">
            <StandardCard />
            <GreetingContainer title="Greeting" />
            <HelloContainer
              title="Hello"
              titleBackgroundColor={colors.pink[300]}
              titleFontColor={colors.black}
            />
            <SayContainer
              title="Say"
              titleBackgroundColor={colors.amber[500]}
              titleFontColor={colors.black}
            />
          </div>
          <div className="mdl-cell mdl-cell--5-col">
            <CounterContainer />
            <FalcorHelloContainer
              titleBackgroundColor={colors.cyan[200]}/>
            <GithubContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
