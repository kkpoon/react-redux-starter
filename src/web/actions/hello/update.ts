import { Action } from "../";

export class HelloUpdateAction implements Action {
  type: string = "UPDATE_HELLO";
  message: string;

  constructor(message: string) {
    this.message = message;
  }
}

export default function(message: string): HelloUpdateAction {
  return new HelloUpdateAction(message);
}
