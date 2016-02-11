'use strict';

function increase() {
  return { type: "INCREASE_COUNTER" };
}

export default function() {
  return (dispatch) => {
    setTimeout(() => dispatch(increase()), 2000);
  }
}
