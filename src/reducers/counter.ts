import { IncreasingCounterAction, IncreaseCounterAction } from "../actions";

interface CounterState {
  count: number;
  calculating: boolean;
}

type CounterAction = IncreasingCounterAction | IncreaseCounterAction;

const initialState: CounterState = {count: 0, calculating: false};

export function counter(state: CounterState = initialState, action: CounterAction): CounterState {
  const { count } = state;
  switch (action.type) {
  case "INCREASING_COUNTER":
    return Object.assign({}, state, {calculating: true});
  case "INCREASE_COUNTER":
    return Object.assign({}, state, {count: count + 1, calculating: false});
  default:
    return state;
  }
}
