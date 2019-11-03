import { put, all, takeLatest } from "redux-saga/effects";

import { TaskConstants } from "../constants";

function* updateName(model) {
  yield put({ type: TaskConstants.UPDATE_NAME_START, result: {} });
}

function* updateNameWatcher() {
  yield takeLatest(TaskConstants.UPDATE_NAME, updateName);
}

export default function* rootSaga() {
  yield all([updateNameWatcher()]);
}
