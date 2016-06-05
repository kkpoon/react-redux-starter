/* @flow */

import { CHANGE_LANGUAGE } from "../";

export type ChangeAction = { type: CHANGE_LANGUAGE, locale: string };

export default (locale: string): ChangeAction => ({ type: CHANGE_LANGUAGE, locale });
