'use strict';

import colors from "material-colors";
import React, { Component, PropTypes } from 'react';
import { Card, CardTitle, CardActions, Button, Spacer, Spinner } from "react-mdl";

class TextCard extends Component {

  render() {
    const {
      text,
      loading,
      titleBackgroundColor,
      titleFontColor
    } = this.props;
    return (
      <Card shadow={2}
            style={{
              width: "100%",
              background: colors.cyan[500]
            }}>
        <CardTitle expand style={{alignItems: "flex-start"}}>
          <h4 style={{marginTop: 0}}>{text}</h4>
        </CardTitle>
        <CardActions border style={{
          display: "flex",
          boxSizing: "border-box",
          alignItems: "center"
        }}>
          <Button raised ripple colored
                  style={{color: colors.white}}
                  onClick={e => this.handleReloadButtonClick(e)}>
            Reload
          </Button>
          <Spacer />
          {(() => { if (loading) { return (<Spinner />); }})()}
        </CardActions>
      </Card>
    );
  }

  handleReloadButtonClick(e) {
    this.props.onReloadButtonClick();
  }
}

TextCard.propTypes = {
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  onReloadButtonClick: PropTypes.func.isRequired
};

TextCard.defaultProps = {
  loading: false
};

export default TextCard;
