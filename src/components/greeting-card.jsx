/* @flow */

'use strict';

import colors from "material-colors";

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

import '../themes/default-md/components/greeting-card';


class GreetingCard extends Component {

  render(): ?ReactElement {
    const {
      title,
      greetingMessage,
      titleBackgroundColor,
      titleFontColor
    } = this.props;
    return (
      <div className="mdl-card mdl-shadow--2dp card">
        <div className="mdl-card__title title" style={{
          backgroundColor: titleBackgroundColor,
          color: titleFontColor
        }}>
          <h2 className="mdl-card__title-text">{title}</h2>
        </div>
        <div className="mdl-card__supporting-text">
          {greetingMessage}
          <form action="#">
            <div className="mdl-textfield mdl-js-textfield" ref="gMsgField">
              <input className="mdl-textfield__input"
                     type="text"
                     id="gMsg"
                     ref="gMsgInput"
                     onChange={e => this.handleGreetMsgChange(e)} />
              <label className="mdl-textfield__label" htmlFor="gMsg">
                Say Hello...
              </label>
            </div>
          </form>
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <button className="mdl-button mdl-button--colored mdl-js-button
                             mdl-js-ripple-effect"
                  onClick={e => this.handleClearButtonClick(e)}>
            Clear
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

  handleClearButtonClick(e: Event): void {
    const input = this.refs.gMsgInput;
    const field = this.refs.gMsgField;
    input.value = '';
    d3.select(ReactDOM.findDOMNode(field)).classed('is-dirty', false);
    this.props.onClearButtonClick();
  }

  handleGreetMsgChange(e: Event): void {
    const input = this.refs.gMsgInput;
    const msg = input.value.trim();
    this.props.onGreetingMessageChange(msg);
  }
}

GreetingCard.propTypes = {
  title: PropTypes.string.isRequired,
  titleBackgroundColor: PropTypes.string,
  titleFontColor: PropTypes.string,
  greetingMessage: PropTypes.string.isRequired,
  onGreetingMessageChange: PropTypes.func.isRequired,
  onClearButtonClick: PropTypes.func.isRequired
};

GreetingCard.defaultProps = {
  titleBackgroundColor: colors.blue[500],
  titleFontColor: colors.white
};

export default GreetingCard;
