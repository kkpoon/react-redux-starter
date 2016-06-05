import { connect } from "react-redux";

import { increaseAsync } from "../actions/counter";

import Counter from "../components/counter";

const mapStateToProps = (state) => {
  return {...state.counter};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrease: () => {
      dispatch(increaseAsync());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
