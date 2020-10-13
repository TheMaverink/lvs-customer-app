import { takeLatest, call, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import * as RootNavigation from '../../RootNavigation';
import { apiBooking } from './api';

import {
  SELECT_DAY_REQUEST,
  SELECT_HOUR_REQUEST,
  BOOKING_REQUEST,
  selectDayFailure,
  selectDaySuccess,
  selectHourFailure,
  selectHourSuccess,
  bookingFailure,
  bookingSuccess,
} from './actions';

function* selectDayWorker(action) {

 
  try {
    const { dateString } = action.payload;

    yield put(selectDaySuccess(dateString));
  } catch (error) {
    yield put(selectDayFailure(error));
    console.log(error);
  }
}

function* selectHourWorker(action) {
  console.log(action.payload);
  try {
    yield put(selectHourSuccess(action.payload));
  } catch (error) {
    yield put(selectHourFailure(error));
  }
}

function* bookingWorker(action) {
  let token;
  token = yield AsyncStorage.getItem('token')
  // yield action.payload['token'] = token
  try {
    const apiResult = yield call(apiBooking, action.payload,token);
    yield put(bookingSuccess(apiResult.data));
    // console.log('from saga')
    // console.log(apiResult.data);
    RootNavigation.navigate('Bookings',{bookingData:apiResult.data } );
      // RootNavigation.navigate('Bookings');
  } catch (error) {
    console.log(error);
    yield put(bookingFailure(error));
  }
}

export default function* watcher() {
  yield takeLatest(SELECT_DAY_REQUEST, selectDayWorker);
  yield takeLatest(SELECT_HOUR_REQUEST, selectHourWorker);
  yield takeLatest(BOOKING_REQUEST, bookingWorker);
}
