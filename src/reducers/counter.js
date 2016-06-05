import { INCREASE, INCREASING } from "../actions";

function counter(state = {count: 0, calculating: false}, action) {
  const { count } = state;
  switch (action.type) {
  case INCREASING:
    return Object.assign({}, state, {calculating: true});
  case INCREASE:
    return Object.assign({}, state, {count: count + 1, calculating: false});
  default:
    return state;
  }
}

export default counter;
