'use strict';

import colors from "material-colors";

import React, { Component, PropTypes } from 'react';

import '../themes/default-md/components/counter-card';

class CounterCard extends Component {

  render() {
    const {
      counter,
      titleBackgroundColor,
      titleFontColor
    } = this.props;
    return (
      <div className="mdl-card mdl-shadow--2dp card">
        <div className="mdl-card__title title" style={{
          backgroundColor: titleBackgroundColor,
          color: titleFontColor
        }}>
          <h2 className="mdl-card__title-text">Counter</h2>
        </div>
        <div className="mdl-card__supporting-text">
          {counter}
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <button className="mdl-button mdl-button--colored mdl-js-button
                             mdl-js-ripple-effect"
                  onClick={e => this.handleIncreaseButtonClick(e)}>
            +1 (delayed)
          </button>
        </div>
        <div className="mdl-card__menu menu">
          <button className="mdl-button mdl-button--icon mdl-js-button
                             mdl-js-ripple-effect">
            <i className="material-icons">share</i>
          </button>
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
  titleBackgroundColor: PropTypes.string,
  titleFontColor: PropTypes.string,
  onIncreaseButtonClick: PropTypes.func.isRequired
};

CounterCard.defaultProps = {
  titleBackgroundColor: colors.blue[500],
  titleFontColor: colors.white
};

export default CounterCard;
