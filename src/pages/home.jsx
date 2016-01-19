/*
 * @flow
 */

'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { updateGreeting, clearGreeting } from '../actions/greeting';

import GreetingCard from '../components/greeting-card';

class HomePage extends Component {
  render(): ?ReactElement {
    const { dispatch, greetingMessage } = this.props;
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--8-col">
          <GreetingCard
            greetingMessage={greetingMessage}
            onGreetingMessageChange={msg => dispatch(updateGreeting(msg))}
            onClearButtonClick={() => dispatch(clearGreeting())}
          />
        </div>
        <div className="mdl-cell mdl-cell--4-col">
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  greetingMessage: PropTypes.string.isRequired
};

function select(state) {
  return {
    greetingMessage: state.greeting
  };
}

export default connect(select)(HomePage);
