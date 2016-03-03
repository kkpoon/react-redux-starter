"use strict";

import "react-mdl/extra/material";
import "react-mdl/extra/material.css";
import "../themes/default-md-layout.css";

import WebFont from "webfontloader";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import { intlShape, injectIntl, defineMessages } from "react-intl";
import { Link } from "react-router";
import {
  Layout,
  Header,
  HeaderRow,
  Textfield,
  Drawer,
  Navigation,
  Spacer,
  Content,
  Footer,
  FooterSection,
  FooterLinkList
} from "react-mdl";

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

const messages = defineMessages({
  siteName: {
    id: "site.name",
    defaultMessage: "React Redux Boilerplate",
  }
});

class DefaultLayout extends Component {

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <Layout>
        <Header scroll>
          <HeaderRow title={formatMessage(messages.siteName)}>
            <Textfield value=""
                       onChange={(e) => {}}
                       label="Search"
                       expandable
                       expandableIcon="search"/>
          </HeaderRow>
        </Header>
        <Drawer title="K.K. POON">
          <Navigation>
            <Link
              className="mdl-navigation__link mdl-navigation__link--icon"
              to="/"
              >
              <i className="material-icons">home</i>
              <span>Home</span>
            </Link>
            <Link
              className="mdl-navigation__link mdl-navigation__link--icon"
              to="/feature1"
              >
              <i className="material-icons">dashboard</i>
              <span>Feature 1</span>
            </Link>
            <Link
              className="mdl-navigation__link mdl-navigation__link--icon"
              to="/feature2"
              >
              <i className="material-icons">donut_small</i>
              <span>Feature 2</span>
            </Link>
          </Navigation>
          <Spacer />
          <Navigation>
            <Link
              className="mdl-navigation__link mdl-navigation__link--icon"
              to="/settings"
              >
              <i className="material-icons">settings</i>
              <span>Settings</span>
            </Link>
            <Link
              className="mdl-navigation__link mdl-navigation__link--icon"
              to="/logout"
              >
              <i className="material-icons">exit_to_app</i>
              <span>Sign out</span>
            </Link>
          </Navigation>
        </Drawer>
        <Content component="main"
                 style={{display: "flex", flexDirection: "column"}}>
          <div className="page-content">
            {this.props.children}
          </div>
          <Spacer />
          <Footer size="mega">
            <FooterSection type="bottom" logo={formatMessage(messages.siteName)}>
              <FooterLinkList>
                <a href="#">Help</a>
                <a href="#">Privacy &amp; Terms</a>
              </FooterLinkList>
            </FooterSection>
          </Footer>
        </Content>
      </Layout>
    );
  }

}

DefaultLayout.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(DefaultLayout);
