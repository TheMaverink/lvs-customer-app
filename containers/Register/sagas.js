import { takeLatest, call, put } from 'redux-saga/effects';
import { startSubmit, stopSubmit } from 'redux-form';
import { AsyncStorage } from 'react-native';
import { FORM_NAME } from './consts';
import * as RootNavigation from '../../RootNavigation';

import {
  REGISTER_REQUEST,
  SEND_SMS_REQUEST,
  VERIFY_CODE_REQUEST,
  registerRequest,
  registerFailure,
  registerSuccess,
  sendSmsFailure,
  sendSmsSuccess,
  verifyCodeFailure,
  verifyCodeSuccess,
} from './actions';

import { apiRegister, apiSendSms, apiVerifyCode } from './api';

function* sendSmsWorker(action) {
  try {
    const apiResult = yield call(apiSendSms, action.payload);
    // const phonetoVerify = apiResult.data["to"]

    yield put(sendSmsSuccess(action.payload));

    RootNavigation.navigate('Register Step 2');
    // RootNavigation.navigate('Register Step 2', {
    //   phonetoVerify
    // });
  } catch (error) {
    console.log(error.message);
    yield put(sendSmsFailure(error));
  }
}

function* verifyCodeWorker(action) {
  try {
    const { phoneNumber, verificationCode } = action.payload;

    const apiResult = yield call(apiVerifyCode, phoneNumber, verificationCode);

    if (apiResult.data['valid']) {
      yield put(verifyCodeSuccess(verificationCode));
      yield put(registerRequest(phoneNumber));
    } else {
      yield put(verifyCodeFailure('verifiction code does not match!'));
    }
    // console.log('apiResult')
    // console.log(apiResult.data['valid'])
    // yield put(verifyCodeSuccess(verificationCode));
    // yield put(registerRequest(phoneNumber));
  } catch (error) {
    console.log(error);
    yield put(verifyCodeFailure(error));
  }
}

function* registerWorker(action) {
  try {
    const apiResult = yield call(apiRegister, action.payload);
    console.log(apiResult)
    yield put(registerSuccess(apiResult.data));

    yield AsyncStorage.setItem('token', apiResult.data.token);

    // yield AsyncStorage.getItem('token').then((res) => console.log(res))
    // to be changed
    // RootNavigation.navigate('Login');
  } catch (error) {
    const errorMessage = yield error.toJSON().message;
    yield put(registerFailure(errorMessage));
  }
}

export default function* watcher() {
  yield takeLatest(REGISTER_REQUEST, registerWorker);
  yield takeLatest(SEND_SMS_REQUEST, sendSmsWorker);
  yield takeLatest(VERIFY_CODE_REQUEST, verifyCodeWorker);
}
