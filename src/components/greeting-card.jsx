/* @flow */

'use strict';

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

const Styles = {
  Card: {
    width: "100%"
  },
  CardTitle: {
    color: "white",
    height: 176,
    backgroundColor: "#46B6AC"
  },
  CardMenu: {
    color: "white"
  }
};

class GreetingCard extends Component {

  render(): ?ReactElement {
    const { greetingMessage } = this.props;
    return (
      <div className="mdl-card mdl-shadow--2dp" style={Styles.Card}>
        <div className="mdl-card__title" style={Styles.CardTitle}>
          <h2 className="mdl-card__title-text">Greeting</h2>
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
        <div className="mdl-card__menu" style={Styles.CardMenu}>
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
  greetingMessage: PropTypes.string.isRequired,
  onGreetingMessageChange: PropTypes.func.isRequired,
  onClearButtonClick: PropTypes.func.isRequired
};

export default GreetingCard;
