/*
 * this container conform the suggested pattern described in
 * https://rackt.org/redux/docs/basics/UsageWithReact.html
 *
 */

import { connect } from 'react-redux';

import greetingUpdate from '../actions/greeting/update';
import greetingClear from '../actions/greeting/clear';

import GreetingCard from '../components/greeting-card';

const mapStateToProps = (state) => {
  return {
    greetingMessage: state.greeting
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGreetingMessageChange: (msg) => {
      dispatch(greetingUpdate(msg));
    },
    onClearButtonClick: () => {
      dispatch(greetingClear());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GreetingCard);
