/* @flow */

import type { UpdateAction } from "../actions/greeting/update";
import type { ClearAction } from "../actions/greeting/clear";

import { UPDATE_GREETING, CLEAR_GREETING } from "../actions";

export type State = string;
export type GreetingAction = UpdateAction | ClearAction;

function greeting(state: State = "", action: GreetingAction): State {
  switch (action.type) {
  case UPDATE_GREETING:
    return action.message;
  case CLEAR_GREETING:
    return "";
  default:
    return state;
  }
}

export default greeting;
