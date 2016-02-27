"use strict";

import Immutable from "immutable";

const DefaultState = Immutable.Map({message: "", fetching: false});

function falcorHello(state = DefaultState, action) {
  switch (action.type) {
  case "FETCHING_FALCOR_HELLO":
    return state.set("fetching", true);
  case "FETCHED_FALCOR_HELLO":
    return state.set("fetching", false).set("message", action.message);
  default:
    return state;
  }
}

export default falcorHello;
