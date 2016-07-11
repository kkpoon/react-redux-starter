import { takeEvery, delay } from "redux-saga";
import { put } from "redux-saga/effects";

import { INCREASE_COUNTER_ASYNC } from "../actions/constants";
import { increaseCounter, increasingCounter } from "../actions";

export function* increaseAsync() {
  yield* takeEvery(INCREASE_COUNTER_ASYNC, function* () {
    yield put(increasingCounter());
    yield delay(1000);
    yield put(increaseCounter());
  });
}

export default function * rootSaga() {
  yield [increaseAsync()];
}
