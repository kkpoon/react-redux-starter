"use strict";

import colors from "material-colors";
import React, {Component} from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  CardMenu,
  Grid,
  Cell,
  Button,
  IconButton
} from "react-mdl";

import Layout from "../layouts/default-md-layout";

class Feature1Page extends Component {
  render() {
    return (
      <Layout>
        <Grid>
          <Cell col={8}>
            <Card shadow={2} style={{width: "100%"}}>
              <CardTitle
                style={{
                  height: 150,
                  color: colors.white,
                  background: colors.cyan[500]
                }}>
                Feature 1 Overview
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
              </CardText>
              <CardActions border>
                <Button primary ripple>Get Started</Button>
              </CardActions>
              <CardMenu style={{color: "#fff"}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>
        </Grid>
      </Layout>
    );
  }
}

//export default HomePage;
module.exports = Feature1Page;
