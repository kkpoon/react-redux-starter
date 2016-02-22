'use strict';

import colors from "material-colors";
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { intlShape, injectIntl, defineMessages } from 'react-intl';

import StandardCard from "./mdl/card/standard-card";
import Button from "./mdl/button";

const messages = defineMessages({
  greeting: {
      id: 'greeting',
      defaultMessage: 'Greeting',
  }
});

class GreetingCard extends StandardCard {

  renderBody() {
    const {formatMessage} = this.props.intl;
    const { greetingMessage } = this.props;
    return (
      <div>
        {formatMessage(messages.greeting)}
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
    );
  }

  renderActions() {
    return (
      <Button text="Clear"
              color="primary"
              ripple={true}
              onClick={e => this.handleClearButtonClick(e)}/>
    );
  }

  handleClearButtonClick(e) {
    const input = this.refs.gMsgInput;
    const field = this.refs.gMsgField;
    input.value = '';
    const className = ReactDOM.findDOMNode(field).className;
    ReactDOM.findDOMNode(field).className = className.replace("is-dirty", "");
    this.props.onClearButtonClick();
  }

  handleGreetMsgChange(e) {
    const input = this.refs.gMsgInput;
    const msg = input.value.trim();
    this.props.onGreetingMessageChange(msg);
  }
}

GreetingCard.propTypes = Object.assign({}, StandardCard.propTypes, {
  intl: intlShape.isRequired,
  greetingMessage: PropTypes.string.isRequired,
  onGreetingMessageChange: PropTypes.func.isRequired,
  onClearButtonClick: PropTypes.func.isRequired
});

GreetingCard.defaultProps = Object.assign({}, StandardCard.defaultProps, {
  title: "Greeting"
});

export default injectIntl(GreetingCard);
