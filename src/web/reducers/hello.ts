import { Action } from "../actions/";
import { HelloUpdateAction } from "../actions/hello/update";

function hello(state: string = "", action: Action): string {
  switch (action.type) {
    case "UPDATE_HELLO":
      return (<HelloUpdateAction> action).message;
    case "CLEAR_HELLO":
      return "";
    default:
      return state;
  }
}

export default hello;
