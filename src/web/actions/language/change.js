/* @flow */

export type ChangeAction = { type: "CHANGE_LANGUAGE", locale: string };

export default function(locale: string): ChangeAction {
  return { type: "CHANGE_LANGUAGE", locale };
}
