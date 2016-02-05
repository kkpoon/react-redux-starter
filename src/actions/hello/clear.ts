import { Action } from "../";

export interface HelloClearAction extends Action {}

export default function clear(): Action {
  return <HelloClearAction>{ type: "CLEAR_HELLO" };
}
