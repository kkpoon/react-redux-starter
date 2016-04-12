/* @flow */

export type UpdateAction = { type: "UPDATE_GREETING", message: string };

export default function(message: string): UpdateAction {
  return { type: "UPDATE_GREETING", message };
}
