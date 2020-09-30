import { all, fork } from 'redux-saga/effects';
import registerSaga from 'containers/Register/sagas';
import loginSaga from 'containers/Login/sagas';
import updateCustomerSaga from 'containers/UpdateCustomer/sagas';
import washesSaga from 'containers/Washes/sagas'
import calendarSaga from 'containers/Calendar/sagas'
import servicesSaga from "containers/Services/sagas"

export default function* rootSaga() {
  yield all([
    fork(registerSaga),
    fork(loginSaga),
    fork(updateCustomerSaga),
    fork(washesSaga),
    fork(calendarSaga),
    fork(servicesSaga)
  ]);
}
