import { all, fork } from 'redux-saga/effects';
import registerSaga from 'containers/Register/sagas';
import loginSaga from 'containers/Login/sagas';
import updateCustomerSaga from 'containers/UpdateCustomer/sagas';

export default function* rootSaga() {
  yield all([
    fork(registerSaga),
    fork(loginSaga),
    fork(updateCustomerSaga)
  ]);
}
