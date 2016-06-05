/* @flow */

import { CLEAR_GREETING } from "../";

export type ClearAction = { type: CLEAR_GREETING };

export default (): ClearAction => ({ type: CLEAR_GREETING });
