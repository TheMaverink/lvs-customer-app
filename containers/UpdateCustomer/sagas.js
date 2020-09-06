import { takeLatest, call, put } from 'redux-saga/effects';
import { startSubmit, stopSubmit } from 'redux-form';
import { AsyncStorage } from 'react-native';
import { FORM_NAME } from './consts';
import * as RootNavigation from '../../RootNavigation';

import {
  UPDATE_CUSTOMER_REQUEST,
  updateCustomerSuccess,
  updateCustomerFailure,
} from './actions';

import { apiUpdateCustomer } from './api';

function* updateCustomerWorker(action) {
  try {
    const apiResult = yield call(apiUpdateCustomer, action.payload);
    console.log(apiResult.data);
    console.log('apiResult');
    yield put(updateCustomerSuccess(apiResult.data));
    RootNavigation.navigate('Select Wash');
  } catch (error) {
    yield put(updateCustomerFailure(error));
    console.log(error);
  }
}

export default function* watcher() {
  yield takeLatest(UPDATE_CUSTOMER_REQUEST, updateCustomerWorker);
}
