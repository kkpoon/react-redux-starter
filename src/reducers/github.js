'use strict';

import Immutable from "immutable";

const DefaultState = Immutable.Map({user: {}, fetching: false});

function github(state = DefaultState, action) {
  switch (action.type) {
    case "GITHUB_FETCHING":
      return state.set("fetching", true);
    case "GITHUB_FETCHED":
      return state.set("fetching", false).set("user", action.user);
    default:
      return state;
  }
}

export default github;
