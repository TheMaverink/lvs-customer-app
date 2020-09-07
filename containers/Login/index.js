import { connect, useStore } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import reducer from './reducer';

import {
  loginRequest,
  loginFailure,
  loginSuccess,
  loginSendSmsRequest,
  loginSendSmsFailure,
  loginSendSmsSuccess,
  loginVerifyRequest,
  loginVerifyFailure,
  loginVerifySuccess,
} from './actions';

import { FORM_NAME, REDUCER_NAME } from './consts';

import { selectIsLoading, selectUserData ,selectPhoneNumberToVerify} from './selectors';
import store from 'store/store';

export const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  userData: selectUserData,
  phoneNumberToVerify: selectPhoneNumberToVerify
});

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      loginRequest,
      loginFailure,
      loginSuccess,
      loginSendSmsRequest,
      loginSendSmsFailure,
      loginSendSmsSuccess,
      loginVerifyRequest,
      loginVerifyFailure,
      loginVerifySuccess,
    },
    dispatch
  );

export default compose(
  connect(mapStateToProps, mapDispatchToProps),

  lifecycle({
    componentDidMount() {
      store.injectReducer(REDUCER_NAME, reducer);
    },
  }),
)

