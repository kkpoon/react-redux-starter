'use strict';
import colors from "material-colors";

import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";
import Helmet from "react-helmet";

import GreetingContainer from '../containers/greeting';
import SayContainer from '../containers/say';
import HelloContainer from '../containers/hello';
import CounterContainer from '../containers/counter';
import FalcorHelloContainer from '../containers/falcorhello';
import GithubContainer from "../containers/github";
import GreetingCard from '../components/greeting-card';
import LanguageContainer from "../containers/language";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Helmet title="Home" />
        <Grid>
          <Cell col={7}>
            <GreetingContainer />
            <HelloContainer />
            <SayContainer />
          </Cell>
          <Cell col={5}>
            <LanguageContainer />
            <CounterContainer />
            <FalcorHelloContainer />
            <GithubContainer />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default HomePage;
