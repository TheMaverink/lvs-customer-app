import { takeLatest, call, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import * as RootNavigation from '../../RootNavigation';
import { apiGetBookings } from './api';

import {
  GET_BOOKINGS_REQUEST,
  getBookingsFailure,
  getBookingsSuccess,
} from './actions';

function* getBookingsWorker(action) {
  try {
    const apiResult = yield call(apiGetBookings);
    yield put(getBookingsSuccess(apiResult));
  } catch (error) {
    yield put(getBookingsFailure(error));
    console.log(error);
  }
}

export default function* watcher() {
  yield takeLatest(GET_BOOKINGS_REQUEST, getBookingsWorker);
}
