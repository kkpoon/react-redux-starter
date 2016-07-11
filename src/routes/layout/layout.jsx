import React from "react";
import { injectIntl } from "react-intl";
import { Link } from "react-router";

import Footer from "./footer";
import Messages from "../../messages";

function Layout(props) {
  const { formatMessage } = props.intl;
  return (
    <div>
      <h1>{formatMessage(Messages.siteName)}</h1>
      <Link to="/">
        <span>Home</span>
      </Link>
      <div>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

module.exports = injectIntl(Layout);
