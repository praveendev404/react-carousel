import { put, all, takeLatest } from "redux-saga/effects";

import { TaskConstants } from "../constants";

function* updateName(actiion) {
  debugger;
  yield put({ type: TaskConstants.UPDATE_NAME_START, model: actiion.model });
}

function* updateNameWatcher() {
  yield takeLatest(TaskConstants.UPDATE_NAME, updateName);
}

export default function* rootSaga() {
  yield all([updateNameWatcher()]);
}
