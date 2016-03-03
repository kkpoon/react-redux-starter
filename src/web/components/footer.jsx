import React, { Component } from "react";
import { Footer, FooterSection, FooterLinkList } from "react-mdl";
import { intlShape, injectIntl } from "react-intl";

import Messages from "../messages";

class MyFooter extends Component {

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <Footer size="mini">
        <FooterSection type="bottom" logo={formatMessage(Messages.siteName)}>
          <FooterLinkList>
            <a href="#">Help</a>
            <a href="#">Privacy &amp; Terms</a>
          </FooterLinkList>
        </FooterSection>
      </Footer>
    );
  }

}

MyFooter.propTypes = {
  intl: intlShape.isRequired
};

MyFooter.defaultProps = {};

export default injectIntl(MyFooter);
