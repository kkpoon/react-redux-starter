import { INCREASE_COUNTER, INCREASING_COUNTER } from "../actions/constants";

function counter(state = {count: 0, calculating: false}, action) {
  const { count } = state;
  switch (action.type) {
  case INCREASING_COUNTER:
    return Object.assign({}, state, {calculating: true});
  case INCREASE_COUNTER:
    return Object.assign({}, state, {count: count + 1, calculating: false});
  default:
    return state;
  }
}

export default counter;
