/* @flow */

'use strict';

import type { Action } from "../";

export default function(message: string): Action {
  return { type: 'UPDATE_GREETING', message };
}
