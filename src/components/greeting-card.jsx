import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import { intlShape, injectIntl, defineMessages } from "react-intl";

const messages = defineMessages({
  greeting: {
    id: "greeting",
    defaultMessage: "Greeting",
  }
});

class GreetingCard extends Component {

  render() {
    const { formatMessage } = this.props.intl;
    const { greetingMessage } = this.props;
    return (
      <div>
        <h2>{formatMessage(messages.greeting)}</h2>
        <h3>{greetingMessage}</h3>
        <input
          type="text"
          value={greetingMessage}
          onChange={e => this.handleGreetMsgChange(e)} />

          <button
            type="button"
            onClick={e => this.handleClearButtonClick(e)}>Clear</button>
      </div>
    );
  }

  handleClearButtonClick(e) {
    this.props.onClearButtonClick();
  }

  handleGreetMsgChange(e) {
    const msg = e.target.value.trim();
    this.props.onGreetingMessageChange(msg);
  }
}

GreetingCard.propTypes = {
  intl: intlShape.isRequired,
  greetingMessage: PropTypes.string.isRequired,
  onGreetingMessageChange: PropTypes.func.isRequired,
  onClearButtonClick: PropTypes.func.isRequired
};

GreetingCard.defaultProps = {
  title: "Greeting"
};

export default injectIntl(GreetingCard);
