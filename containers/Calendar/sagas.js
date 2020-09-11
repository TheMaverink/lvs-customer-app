import { takeLatest, call, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import * as RootNavigation from '../../RootNavigation';

import {
  SELECT_DAY_REQUEST,
  SELECT_HOUR_REQUEST,
  selectDayFailure,
  selectDaySuccess,
  selectHourFailure,
  selectHourSuccess,
} from './actions';



function* selectDayWorker(action) {
  try {
   
  console.log('saga triggered')
  } catch (error) {
    console.log(error);
   
  }
}

// function* selectWashWorker(action) {
//   try {
//     yield put(selectWashSuccess(action.payload));
//     RootNavigation.navigate('Calendar');
//   } catch (error) {
//     yield put(selectWashFailure(error));
//   }
// }

export default function* watcher() {
  yield takeLatest(SELECT_DAY_REQUEST, selectDayWorker);
  // yield takeLatest(SELECT_HOUR_REQUEST, selectHourWorker);
}
