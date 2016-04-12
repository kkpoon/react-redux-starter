/* @flow */

export type ClearAction = { type: "CLEAR_GREETING" };

export default function(): ClearAction {
  return { type: "CLEAR_GREETING" };
}
