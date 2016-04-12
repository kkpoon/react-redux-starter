/* @flow */

export type IncreaseAction = { type: "INCREASE_COUNTER" };
export type IncreasingAction = { type: "INCREASING_COUNTER" };
type DispatchFunction = ((action: IncreaseAction|IncreasingAction) => void);
type Thunk = ((dispatch: DispatchFunction) => void);

function increase(): IncreaseAction {
  return { type: "INCREASE_COUNTER" };
}

function increasing(): IncreasingAction {
  return { type: "INCREASING_COUNTER" };
}

export default function(): Thunk {
  return (dispatch) => {
    dispatch(increasing());
    setTimeout(() => dispatch(increase()), 2000);
  };
}
