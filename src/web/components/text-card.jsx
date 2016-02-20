'use strict';

import colors from "material-colors";

import React, { Component, PropTypes } from 'react';

import classNames from "classnames";

class TextCard extends Component {

  render() {
    const {
      text,
      loading,
      titleBackgroundColor,
      titleFontColor
    } = this.props;
    return (
      <div className="mdl-card mdl-shadow--2dp" style={{
        backgroundColor: titleBackgroundColor,
        color: titleFontColor,
        width: "100%"
      }}>
        <div className="mdl-card__title mdl-card--expand" style={{
          alignItems: "flex-start"
        }}>
          <h4 style={{marginTop: 0}}>{text}</h4>
        </div>
        <div className="mdl-card__actions mdl-card--border" style={{
          display: "flex",
          boxSizing: "border-box",
          alignItems: "center"
        }}>
          <button className="mdl-button mdl-js-button mdl-button--raised
                             mdl-js-ripple-effect mdl-button--colored"
                  style={{color: colors.white}}
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
