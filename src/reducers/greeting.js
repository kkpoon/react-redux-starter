/* @flow */

'use strict';

import type { Action } from '../actions';

type State = string;

function greeting(state: State = '', action: Action): State {
  switch (action.type) {
    case "UPDATE_GREETING":
      return action.message;
    case "CLEAR_GREETING":
      return '';
    default:
      return state;
  }
}

export default greeting;
