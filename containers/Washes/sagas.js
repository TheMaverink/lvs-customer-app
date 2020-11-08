import { takeLatest, call, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import * as RootNavigation from '../../RootNavigation';
import { useStore } from 'react-redux'


import {
  WASHES_REQUEST,
  SELECT_WASH_REQUEST,
  washesFailure,
  washesSuccess,
  selectWashFailure,
  selectWashSuccess,
} from './actions';

import { apiGetWashes } from './api';



function* washesWorker(action) {
  try {
    const apiResult = yield call(apiGetWashes);
    yield put(washesSuccess(apiResult.data));
    // yield put({type:'GET_TIMES_REQUEST'});

   
  } catch (error) {
    console.log(error);
    yield put(washesFailure(error));
  }
}

function* selectWashWorker(action) {
  try {
    yield put(selectWashSuccess(action.payload));
    RootNavigation.navigate('Calendar');
  } catch (error) {
    yield put(selectWashFailure(error));
  }
}

export default function* watcher() {
  yield takeLatest(WASHES_REQUEST, washesWorker);
  yield takeLatest(SELECT_WASH_REQUEST, selectWashWorker);
}
