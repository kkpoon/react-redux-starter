'use strict';
import colors from "material-colors";

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import helloUpdate from '../actions/hello/update';
import helloClear from '../actions/hello/clear';

import sayUpdate from '../actions/say/update';
import sayClear from '../actions/say/clear';

import increaseCounter from '../actions/counter/increment';

import GreetingContainer from '../containers/greeting';
import GreetingCard from '../components/greeting-card';
import CounterCard from '../components/counter-card';

class HomePage extends Component {
  render() {
    const { dispatch, helloMessage, sayMessage, counter } = this.props;
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--8-col">
          <GreetingContainer title="Greeting" />
        </div>
        <div className="mdl-cell mdl-cell--8-col">
          <GreetingCard
            title="Hello"
            titleBackgroundColor={colors.pink[300]}
            titleFontColor={colors.black}
            greetingMessage={helloMessage}
            onGreetingMessageChange={msg => dispatch(helloUpdate(msg))}
            onClearButtonClick={() => dispatch(helloClear())}
          />
        </div>
        <div className="mdl-cell mdl-cell--8-col">
          <GreetingCard
            title="Say"
            titleBackgroundColor={colors.amber[500]}
            titleFontColor={colors.black}
            greetingMessage={sayMessage}
            onGreetingMessageChange={msg => dispatch(sayUpdate(msg))}
            onClearButtonClick={() => dispatch(sayClear())}
          />
        </div>
        <div className="mdl-cell mdl-cell--4-col">
          <CounterCard
            counter={counter}
            onIncreaseButtonClick={() => dispatch(increaseCounter())}
          />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  helloMessage: PropTypes.string.isRequired,
  sayMessage: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return {
    helloMessage: state.hello,
    sayMessage: state.say,
    counter: state.counter
  };
}

export default connect(mapStateToProps)(HomePage);
