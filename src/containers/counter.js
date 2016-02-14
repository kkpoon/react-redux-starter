/*
 * this container conform the suggested pattern described in
 * https://rackt.org/redux/docs/basics/UsageWithReact.html
 *
 */

import { connect } from 'react-redux';

import increaseCounter from '../actions/counter/increment';

import CounterCard from '../components/counter-card';

const mapStateToProps = (state) => {
  return {
    counter: state.counter.get("counter"),
    increasing: state.counter.get("increasing")
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseButtonClick: () => {
      dispatch(increaseCounter());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterCard);
