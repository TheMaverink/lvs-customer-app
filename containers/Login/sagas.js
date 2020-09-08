import { takeLatest, call, put } from 'redux-saga/effects';
import { startSubmit, stopSubmit } from 'redux-form';
import { AsyncStorage } from 'react-native';
import { FORM_NAME } from './consts';
import * as RootNavigation from '../../RootNavigation';

import {
  LOGIN_REQUEST,
  LOGIN_SEND_SMS_REQUEST ,
  LOGIN_VERIFY_REQUEST,
  loginRequest,
  loginFailure,
  loginSuccess,
  loginSendSmsFailure,
  loginSendSmsSuccess,
  loginVerifyFailure,
  loginVerifySuccess,
} from './actions';

import { apiLogin, apiSendSms, apiVerifyLogin } from './api';

function* sendSmsWorker(action) {
  try {
    const apiResult = yield call(apiSendSms, action.payload);
    // const phonetoVerify = apiResult.data["to"]

    yield put(loginSendSmsSuccess(action.payload));

    RootNavigation.navigate('Login Step 2');
    // RootNavigation.navigate('Register Step 2', {
    //   phonetoVerify
    // });
  } catch (error) {
    console.log(error.message);
    yield put(loginSendSmsFailure(error));
  }
}

function* verifyCodeWorker(action) {
  try {
    const { phoneNumber, verificationCode } = action.payload;

    const apiResult = yield call(apiVerifyLogin, phoneNumber, verificationCode);

    if (apiResult.data['valid']) {
      console.log('great success')
      yield put(loginVerifySuccess(verificationCode));
      yield put(loginRequest(phoneNumber));
      
    } else {
      yield put( loginVerifyFailure('verification code does not match!'));
    }
    // console.log('apiResult')
    // console.log(apiResult.data['valid'])
    // yield put(verifyCodeSuccess(verificationCode));
    // yield put(registerRequest(phoneNumber));
  } catch (error) {
    console.log(error);
    yield put( loginVerifyFailure(error));
  }
}

function* loginWorker(action) {
  try {
    const apiResult = yield call(apiLogin, action.payload);
    console.log(apiResult)
    yield put(loginSuccess(apiResult.data));
    // RootNavigation.navigate('Register Step 3');

    yield AsyncStorage.setItem('token', apiResult.data.token);

    console.log('from async storage')
    yield AsyncStorage.getItem('token').then((res) => console.log(res))
    // to be changed
    // RootNavigation.navigate('Login');
    RootNavigation.navigate('Select Wash');
  } catch (error) {
    const errorMessage = yield error.toJSON().message;
    yield put(loginFailure(errorMessage));
  }
}

export default function* watcher() {
  yield takeLatest(LOGIN_REQUEST, loginWorker);
  yield takeLatest(LOGIN_SEND_SMS_REQUEST , sendSmsWorker);
  yield takeLatest(LOGIN_VERIFY_REQUEST, verifyCodeWorker);
}

