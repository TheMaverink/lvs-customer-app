import { takeLatest, call, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import * as RootNavigation from '../../RootNavigation';
import {
  apiBooking,
  apiGetTimes,
  apiDayFreeSlots,
  apiGetClosedDays,
  apiGetBookedDays
} from './api';

import {
  SELECT_DAY_REQUEST,
  SELECT_HOUR_REQUEST,
  BOOKING_REQUEST,
  GET_TIMES_REQUEST,
  DAY_FREE_SLOTS_REQUEST,
  GET_CLOSED_DAYS_REQUEST,
  GET_BOOKED_DAYS_REQUEST,
  selectDayFailure,
  selectDaySuccess,
  selectHourFailure,
  selectHourSuccess,
  bookingFailure,
  bookingSuccess,
  getTimesFailure,
  getTimesSuccess,
  dayFreeSlotsSuccess,
  dayFreeSlotsFailure,
  getClosedDaysSuccess,
  getClosedDaysFailure,
  getBookedDaysSuccess,
  getBookedDaysFailure,
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
  token = yield AsyncStorage.getItem('token');
  // yield action.payload['token'] = token
  try {
    const apiResult = yield call(apiBooking, action.payload, token);

    yield put(bookingSuccess(apiResult.data));
    // console.log('from saga')
    // console.log(apiResult.data);
    // RootNavigation.navigate('Bookings',{bookingData:apiResult.data } );
    // RootNavigation.navigate('Bookings', {
    //   screen: 'Booking Confirmation',
    //   params: {
    //     bookingData: apiResult.data.booking,
    //   },
    // });

    yield RootNavigation.navigate('Bookings', {
      screen: 'Booking Confirmation',
      params: {
        bookingData: apiResult.data.booking,
      },

      // bookingData: apiResult.data.booking,
      // params: {
      //   bookingData: apiResult.data.booking,
      // },
    });
  } catch (error) {
    console.log(error);
    yield put(bookingFailure(error));
  }
}

function* getTimesWorker(action) {
  try {
    const apiResult = yield call(apiGetTimes);

    yield put(getTimesSuccess(apiResult.data));
  } catch (error) {
    yield put(getTimesFailure(error));
    console.log(error);
  }
}

function* dayFreeSlotsWorker(action) {
  try {
    const apiResult = yield call(apiDayFreeSlots, action.payload);

    yield put(dayFreeSlotsSuccess(apiResult.data));
  } catch (error) {
    yield put(dayFreeSlotsFailure(error));
    console.log(error);
  }
}

function* getClosedDaysWorker(action) {
  try {
    const apiResult = yield call(apiGetClosedDays);

    yield put(getClosedDaysSuccess(apiResult.data));
  } catch (error) {
    yield put(getClosedDaysFailure(error));
    console.log(error);
  }
}

function* getBookedDaysWorker(action) {
  try {
    const apiResult = yield call(apiGetBookedDays);

    yield put(getBookedDaysSuccess(apiResult.data));
  } catch (error) {
    yield put(getBookedDaysFailure(error));
    console.log(error);
  }
}

export default function* watcher() {
  yield takeLatest(SELECT_DAY_REQUEST, selectDayWorker);
  yield takeLatest(SELECT_HOUR_REQUEST, selectHourWorker);
  yield takeLatest(BOOKING_REQUEST, bookingWorker);
  yield takeLatest(GET_TIMES_REQUEST, getTimesWorker);
  yield takeLatest(DAY_FREE_SLOTS_REQUEST, dayFreeSlotsWorker);
  yield takeLatest(GET_CLOSED_DAYS_REQUEST, getClosedDaysWorker);
  yield takeLatest(GET_BOOKED_DAYS_REQUEST, getBookedDaysWorker);
}
