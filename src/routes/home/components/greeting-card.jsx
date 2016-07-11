import React from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";

import {updateGreeting, clearGreeting} from "../../../actions";
import Messages from "../../../messages";

function GreetingCard(props) {
  const { formatMessage } = props.intl;
  const { greetingMessage, dispatch } = props;
  return (
    <div>
      <h2>{formatMessage(Messages.greeting)}</h2>
      <h3>{greetingMessage}</h3>
      <input
        type="text"
        value={greetingMessage}
        onChange={e => dispatch(updateGreeting(e.target.value.trim()))} />

        <button
          type="button"
          onClick={e => dispatch(clearGreeting())}
          >Clear</button>
    </div>
  );
}

module.exports = connect((state) => {
  return {
    greetingMessage: state.greeting,
  };
})(injectIntl(GreetingCard));
