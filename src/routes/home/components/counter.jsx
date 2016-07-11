import React from "react";
import { connect } from "react-redux";

import { increaseCounterAsync } from "../../../actions";

function Counter({ count = 0, calculating = false, dispatch }) {
  return (
    <div>
      <h2>Counter</h2>
      <h3>{count}</h3>
      <button
        type="button"
        onClick={() => dispatch(increaseCounterAsync())}
        disabled={calculating}
      >
        {(() => {
          return calculating ? "hardly calculating +1" : "+1";
        })()}
      </button>
    </div>
  );
}

module.exports = connect((state) => {
  return {...state.counter};
})(Counter);
