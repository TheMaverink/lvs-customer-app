import { all, fork } from 'redux-saga/effects';
import registerSaga from 'containers/Register/sagas';

export default function* rootSaga() {
  yield all([fork(registerSaga)]);
}
