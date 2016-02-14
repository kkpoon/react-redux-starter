'use strict';

import Immutable from "immutable";

function counter(state = Immutable.Map({counter: 0, increasing: false}), action) {
  switch (action.type) {
    case "INCREASE_COUNTER":
      let counter = state.get("counter");
      return state.set("counter", +counter + 1).set("increasing", false);
    case "INCREASING_COUNTER":
      return state.set("increasing", true);
    default:
      return state;
  }
}

export default counter;
