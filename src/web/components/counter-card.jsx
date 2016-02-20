'use strict';

import colors from "material-colors";
import React, { Component, PropTypes } from 'react';
import classNames from "classnames";

class CounterCard extends Component {

  render() {
    const {
      counter,
      increasing,
      titleBackgroundColor,
      titleFontColor
    } = this.props;
    return (
      <div className="mdl-card mdl-shadow--2dp" style={{
        width: "100%",
        backgroundColor: titleBackgroundColor,
        color: titleFontColor
      }}>
        <div className="mdl-card__title mdl-card--expand" style={{
          alignItems: "flex-start"
        }}>
          <h4 style={{marginTop: 0}}>
            Delayed Counter <i style={{fontSize: "0.5em"}}>for 2000ms</i><br/>
            {counter}
          </h4>
        </div>
        <div className="mdl-card__actions mdl-card--border" style={{
            display: "flex",
            boxSizing: "border-box",
            alignItems: "center"
        }}>
          <button className="mdl-button mdl-js-button mdl-button--raised
                             mdl-js-ripple-effect mdl-button--colored"
                  style={{
                    color: colors.white,
                    fontStyle: "italic"
                  }}
                  onClick={e => this.handleIncreaseButtonClick(e)}>
            +1
          </button>
          <div className="mdl-layout-spacer"></div>
          <div className={
            classNames(
              "mdl-spinner",
              "mdl-spinner--single-color",
              "mdl-js-spinner", {
                "is-active": increasing,
                "is-upgraded": increasing
              }
            )
          }></div>
        </div>
      </div>
    );
  }

  handleIncreaseButtonClick(e) {
    this.props.onIncreaseButtonClick();
  }
}

CounterCard.propTypes = {
  counter: PropTypes.number.isRequired,
  increasing: PropTypes.bool,
  titleBackgroundColor: PropTypes.string,
  titleFontColor: PropTypes.string,
  onIncreaseButtonClick: PropTypes.func.isRequired
};

CounterCard.defaultProps = {
  titleBackgroundColor: colors.lightGreen[300],
  titleFontColor: colors.white
};

export default CounterCard;
