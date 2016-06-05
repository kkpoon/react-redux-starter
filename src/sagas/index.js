import { takeEvery, delay } from "redux-saga";
import { put } from "redux-saga/effects";

import { increase, increasing } from "../actions/counter";

export function* increaseAsync() {
  yield* takeEvery("INCREASE_ASYNC", function* () {
    yield put(increasing());
    yield delay(1000);
    yield put(increase());
  });
}

export default function * rootSaga() {
  yield [increaseAsync()];
}
