import React, { Component } from "react";
import { intlShape, injectIntl } from "react-intl";
import { Link } from "react-router";
import {
  Layout,
  Header,
  HeaderRow,
  Textfield,
  Drawer,
  Navigation,
  Spacer,
  Content
} from "react-mdl";

import Footer from "../components/footer";
import Messages from "../messages";

class DefaultLayout extends Component {

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <Layout>
        <Header scroll>
          <HeaderRow title={formatMessage(Messages.siteName)}>
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
        <Content component="main">
          <div className="page-content">
            {this.props.children}
          </div>
          <Spacer />
          <Footer />
        </Content>
      </Layout>
    );
  }

}

DefaultLayout.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(DefaultLayout);
