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

  let token;
  try {

    token = yield AsyncStorage.getItem('token')

    const apiResult = yield call(apiGetBookings,token);
 
    yield put(getBookingsSuccess(apiResult.data));
  } catch (error) {
    yield put(getBookingsFailure(error));
    console.log('error!');
    console.log(error);
  }
}

export default function* watcher() {
  yield takeLatest(GET_BOOKINGS_REQUEST, getBookingsWorker);
}
