'use strict';

function counter(state = 0, action) {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return state + 1;
    default:
      return state;
  }
}

export default counter;
