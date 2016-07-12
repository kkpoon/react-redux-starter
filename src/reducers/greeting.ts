import { UpdateGreetingAction, ClearGreetingAction } from "../actions";

type GreetingAction = UpdateGreetingAction | ClearGreetingAction;

type GreetingState = string;

const initialState: string = "";

export function greeting(state: GreetingState = "", action: GreetingAction): GreetingState {
  switch (action.type) {
  case "UPDATE_GREETING":
    return (<UpdateGreetingAction>action).message;
  case "CLEAR_GREETING":
    return "";
  default:
    return state;
  }
}
