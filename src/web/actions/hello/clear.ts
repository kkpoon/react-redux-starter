import { Action } from "../";

export class HelloClearAction implements Action {
  type: string = "CLEAR_HELLO";
}

export default function(): HelloClearAction {
  return new HelloClearAction();
}
