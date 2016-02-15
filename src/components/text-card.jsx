'use strict';

import colors from "material-colors";

import React, { Component, PropTypes } from 'react';

import classNames from "classnames";

import '../themes/default-md/components/text-card';

class TextCard extends Component {

  render() {
    const {
      text,
      loading,
      titleBackgroundColor,
      titleFontColor
    } = this.props;
    return (
      <div className="counter-card mdl-card mdl-shadow--2dp" style={{
        backgroundColor: titleBackgroundColor,
        color: titleFontColor
      }}>
        <div className="mdl-card__title mdl-card--expand">
          <h4>{text}</h4>
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <button className="mdl-button mdl-js-button mdl-button--raised
                             mdl-js-ripple-effect mdl-button--colored"
                  onClick={e => this.handleReloadButtonClick(e)}>
            Reload
          </button>
          <div className="mdl-layout-spacer"></div>
          <div className={
            classNames(
              "mdl-spinner",
              "mdl-spinner--single-color",
              "mdl-js-spinner", {
                "is-active": loading,
                "is-upgraded": loading
              }
            )
          }></div>
        </div>
      </div>
    );
  }

  handleReloadButtonClick(e) {
    this.props.onReloadButtonClick();
  }
}

TextCard.propTypes = {
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  titleBackgroundColor: PropTypes.string,
  titleFontColor: PropTypes.string,
  onReloadButtonClick: PropTypes.func.isRequired
};

TextCard.defaultProps = {
  titleBackgroundColor: colors.lightGreen[300],
  titleFontColor: colors.white,
  loading: false
};

export default TextCard;
