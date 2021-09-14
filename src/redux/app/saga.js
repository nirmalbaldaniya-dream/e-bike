import { takeEvery, all, put, call } from 'redux-saga/effects';
import * as actions from './actions.js';


function* load({ minHeight=140, maxHeight=190 }) {
  try {
    const response = yield call(
      fetch,
      `https://api.sheety.co/6039e31752df53abe245cb37883f37e2/ebikesSheetyDemo/sheet1?filter=[minimumHeight]=${minHeight}&filter[maximumHeight]=${maxHeight}`);
    const list = yield response.json();
    yield put({ type: actions.LOAD_SUCCESS, data:list.sheet1 })
  } catch (error) {
    yield put({ type: actions.LOAD_FAILED });
  }
}

/**
 * Init Saga.
 */
function* appSaga() {
  yield all([
    takeEvery(actions.LOAD, load)
  ]);
}

export default appSaga;
