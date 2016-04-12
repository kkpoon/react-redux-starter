import { createSelectorCreator, defaultMemoize } from "reselect";
import isEqual from "lodash.isequal";

export const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  isEqual
);
