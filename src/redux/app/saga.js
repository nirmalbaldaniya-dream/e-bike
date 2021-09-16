import { takeEvery, all, put } from 'redux-saga/effects';
import * as actions from './actions.js';
// eslint-disable-next-line import/no-cycle
import { store } from '../store.js';

const supabaseUrl = 'https://bkxkdsjsfbnqncfhispl.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const sp = window.supabase.createClient(supabaseUrl, supabaseKey);

function* load({ minHeight = 140, maxHeight = 190 }) {
  try {
    sp.from('test-bikes-height')
      .select('*')
      .eq('minimum_height', minHeight)
      .eq('maximum_height', maxHeight)
      .then(data => {
        store.dispatch({ type: actions.LOAD_SUCCESS, data: data.data });
      });
  } catch (error) {
    yield put({ type: actions.LOAD_FAILED });
  }
}

/**
 * Init Saga.
 */
function* appSaga() {
  yield all([takeEvery(actions.LOAD, load)]);
}

export default appSaga;
