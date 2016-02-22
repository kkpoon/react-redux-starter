'use strict';

import colors from "material-colors";
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {
  Button,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Textfield
} from "react-mdl";
import { intlShape, injectIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  greeting: {
      id: 'greeting',
      defaultMessage: 'Greeting',
  }
});

class GreetingCard extends Component {

  render() {
    const { formatMessage } = this.props.intl;
    const { greetingMessage } = this.props;
    return (
      <Card shadow={2} style={{width: "100%"}}>
        <CardTitle
          style={{
            height: 150,
            color: colors.white,
            background: colors.blue[500]
          }}>{formatMessage(messages.greeting)}</CardTitle>
        <CardText>
          {greetingMessage}
          <form action="#">
            <Textfield
              label="Say Hello..."
              value={greetingMessage}
              onChange={e => this.handleGreetMsgChange(e)} />
          </form>
        </CardText>
        <CardActions border>
          <Button primary
                  ripple
                  onClick={e => this.handleClearButtonClick(e)}>Clear</Button>
        </CardActions>
      </Card>
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
