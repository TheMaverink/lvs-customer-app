import { takeLatest, call, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import * as RootNavigation from '../../RootNavigation';

import {
  GET_SERVICES_REQUEST,
  getServicesFailure,
  getServicesSuccess,
} from './actions';

import { apiGetServices } from './api';

function* getServicesWorker(action) {
  try {
    const apiResult = yield call(apiGetServices);
    yield put(getServicesSuccess(apiResult.data));
  
  } catch (error) {
    console.log(error);
    yield put(getServicesFailure(error));
  }
}



export default function* watcher() {
  yield takeLatest(GET_SERVICES_REQUEST, getServicesWorker);

}
