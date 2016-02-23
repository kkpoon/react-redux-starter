import { Action } from "../actions/";
import { HelloUpdateAction } from "../actions/hello/update";
import { HelloClearAction } from "../actions/hello/clear";

type HelloAction = ( HelloUpdateAction | HelloClearAction );

function hello(state: string = "", action: HelloAction): string {
  if (action instanceof HelloUpdateAction) {
    return (<HelloUpdateAction> action).message;
  } else if (action instanceof HelloClearAction) {
    return "";
  }
  return state;
}

export default hello;
