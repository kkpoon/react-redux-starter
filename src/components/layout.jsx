import React, { Component } from "react";
import { intlShape, injectIntl } from "react-intl";
import { Link } from "react-router";

import Footer from "../components/footer";
import Messages from "../messages";

class DefaultLayout extends Component {

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <h1>{formatMessage(Messages.siteName)}</h1>
        <Link to="/">
          <span>Home</span>
        </Link>
        <div>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }

}

DefaultLayout.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(DefaultLayout);
