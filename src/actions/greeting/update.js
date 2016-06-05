/* @flow */

import { UPDATE_GREETING } from "../";

export type UpdateAction = { type: UPDATE_GREETING, message: string };

export default (message: string): UpdateAction => ({ type: UPDATE_GREETING, message });
