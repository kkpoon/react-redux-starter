'use strict';

import colors from "material-colors";
import React, { Component, PropTypes } from 'react';

import { Card, CardTitle, CardText, RadioGroup, Radio } from "react-mdl";

class LanguageCard extends Component {

  render() {
    const { locale } = this.props;
    return (
      <Card shadow={2} style={{width: "100%"}}>
        <CardTitle style={{
          height: 150,
          color: colors.white,
          background: colors.blue[500]
        }}>Language Options</CardTitle>
        <CardText>
          <RadioGroup name="lang"
                      value={locale}
                      onChange={(e) => this.handleLanguageSwitch(e)}>
            <Radio value="en" ripple>En</Radio>
            <Radio value="zh-Hans" ripple>繁</Radio>
            <Radio value="zh-Hans-CN" ripple>简</Radio>
          </RadioGroup>
        </CardText>
      </Card>
    );
  }

  handleLanguageSwitch(e) {
    this.props.onLanguageSelect(e.target.value);
  }
}

LanguageCard.propTypes = {
  locale: PropTypes.string.isRequired,
  onLanguageSelect: PropTypes.func.isRequired
};

LanguageCard.defaultProps = {
};

export default LanguageCard;
