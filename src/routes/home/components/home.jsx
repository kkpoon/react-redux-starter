import colors from "material-colors";
import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";
import Helmet from "react-helmet";

import Layout from "../../../layouts/default-md-layout";
import GreetingContainer from '../../../containers/greeting';
import CounterContainer from '../../../containers/counter';
import GreetingCard from '../../../components/greeting-card';
import LanguageContainer from "../../../containers/language";

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title="Home" />
        <Grid>
          <Cell col={7}>
            <GreetingContainer />
          </Cell>
          <Cell col={5}>
            <LanguageContainer />
            <CounterContainer />
          </Cell>
        </Grid>
      </Layout>
    );
  }
}

module.exports = HomePage;
