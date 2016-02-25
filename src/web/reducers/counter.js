/* @flow */

import type {
  IncreaseAction,
  IncreasingAction
} from "../actions/counter/increment";

type State = { counter: number, increasing: boolean };
type Action = IncreaseAction | IncreasingAction;

const DefaultState: State = {counter: 0, increasing: false};

function counter(state: State = DefaultState, action: Action): State {
  switch (action.type) {
    case "INCREASE_COUNTER":
      let newCounter = state.counter + 1;
      return Object.assign({}, state, {counter: newCounter, increasing: false});
    case "INCREASING_COUNTER":
      return Object.assign({}, state, {increasing: true});
    default:
      return state;
  }
}

export default counter;
