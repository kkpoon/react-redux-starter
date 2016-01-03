/* @flow */

'use strict';

export type Action = 
  { type: 'UPDATE_GREETING', message: string } |
  { type: 'CLEAR_GREETING' };

export function updateGreeting(message: string): Action {
  return { type: 'UPDATE_GREETING', message };
}

export function clearGreeting(): Action {
  return { type: 'CLEAR_GREETING' };
}
