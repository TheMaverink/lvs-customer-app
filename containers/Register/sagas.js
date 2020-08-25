import {
  takeLatest, call, put,
} from 'redux-saga/effects'
import { startSubmit, stopSubmit } from 'redux-form'
import { AsyncStorage } from 'react-native'
import { FORM_NAME } from './consts'
import * as RootNavigation from '../../RootNavigation'

import {
  REGISTER_REQUEST,
  SEND_SMS_REQUEST ,
  VERIFY_CODE_REQUEST ,
  registerFailure,
  registerSuccess,
  sendSmsFailure,
  sendSmsSuccess,
  verifyCodeFailure,
  verifyCodeSuccess
} from './actions'

import apiRegister from './api'

function* registerWorker(action) {
  try {
    yield put(startSubmit(FORM_NAME))

    const apiResult = yield call(apiRegister, action.payload)
    yield put(registerSuccess(apiResult.data))

    yield AsyncStorage.setItem('token', apiResult.data.token)

    // yield AsyncStorage.getItem('token').then((res) => console.log(res))
    // to be changed
    RootNavigation.navigate('Login')
  } catch (error) {
    const errorMessage = yield error.toJSON().message
    yield put(registerFailure(errorMessage))
    yield put(stopSubmit(REGISTER_FORM_NAME))
  }
}

function* sendSmsWorker(action){
  try {
    console.log('SEND SMS WORKER')
  } catch (error) {
    
  }
}

function* verifyCodeWorker(action){
  try {
    console.log('VERIFY CODE WORKER')
  } catch (error) {
    
  }
}



export default function* watcher() {
  yield takeLatest(REGISTER_REQUEST, registerWorker)
  yield takeLatest(SEND_SMS_REQUEST, sendSmsWorker)
  yield takeLatest(VERIFY_CODE_REQUEST, verifyCodeWorker)
}
