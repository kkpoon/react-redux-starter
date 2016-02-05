/*
 * @flow
 */

'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { updateGreeting, clearGreeting } from '../actions/greeting';

import helloUpdate from '../actions/hello/update';
import helloClear from '../actions/hello/clear';

import sayUpdate from '../actions/say/update';
import sayClear from '../actions/say/clear';

import GreetingCard from '../components/greeting-card';

class HomePage extends Component {
  render(): ?ReactElement {
    const { dispatch, greetingMessage, helloMessage, sayMessage } = this.props;
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--8-col">
          <GreetingCard
            title="Greeting"
            greetingMessage={greetingMessage}
            onGreetingMessageChange={msg => dispatch(updateGreeting(msg))}
            onClearButtonClick={() => dispatch(clearGreeting())}
          />
        </div>
        <div className="mdl-cell mdl-cell--8-col">
          <GreetingCard
            title="Hello"
            greetingMessage={helloMessage}
            onGreetingMessageChange={msg => dispatch(helloUpdate(msg))}
            onClearButtonClick={() => dispatch(helloClear())}
          />
        </div>
        <div className="mdl-cell mdl-cell--8-col">
          <GreetingCard
            title="Say"
            greetingMessage={sayMessage}
            onGreetingMessageChange={msg => dispatch(sayUpdate(msg))}
            onClearButtonClick={() => dispatch(sayClear())}
          />
        </div>
        <div className="mdl-cell mdl-cell--4-col">
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  greetingMessage: PropTypes.string.isRequired,
  helloMessage: PropTypes.string.isRequired,
  sayMessage: PropTypes.string.isRequired
};

function select(state) {
  return {
    greetingMessage: state.greeting,
    helloMessage: state.hello,
    sayMessage: state.say
  };
}

export default connect(select)(HomePage);
