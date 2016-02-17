import { Action } from "../";

export interface HelloUpdateAction extends Action {
  message: string;
}

export default function update(message: string): Action {
  return <HelloUpdateAction>{ type: "UPDATE_HELLO", message };
}
