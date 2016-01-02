'use strict';

import { UPDATE_GREETING, CLEAR_GREETING } from '../actions';

function greeting(state = '', action) {
  if (action) {
    switch (action.type) {
      case UPDATE_GREETING:
        return action.message;
      case CLEAR_GREETING:
        return '';
      default:
        return state;
    }
  }
  return state;
}

export default greeting;
