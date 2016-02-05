/* @flow */

'use strict';

import type { Action } from "../";

export default function(): Action {
  return { type: 'CLEAR_GREETING' };
}
