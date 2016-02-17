'use strict';

function increase() {
  return { type: "INCREASE_COUNTER" };
}

function increasing() {
  return { type: "INCREASING_COUNTER" };
}

export default function() {
  return (dispatch) => {
    dispatch(increasing());
    setTimeout(() => dispatch(increase()), 2000);
  }
}
