'use strict';

export const UPDATE_GREETING = 'UPDATE_GREETING';
export const CLEAR_GREETING = 'CLEAR_GREETING';

export function updateGreeting(message) {
  return { type: UPDATE_GREETING, message };
};

export function clearGreeting() {
  return { type: CLEAR_GREETING };
};
