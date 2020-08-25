import { connect, useStore } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import reducer from './reducer';

import {
  registerRequest,
  registerFailure,
  registerSuccess,
  sendSmsRequest,
  sendSmsFailure,
  sendSmsSuccess,
  verifyCodeRequest,
  verifyCodeFailure,
  verifyCodeSuccess,
} from './actions';

import { FORM_NAME, REDUCER_NAME } from './consts';

import { selectIsLoading, selectUserData } from './selectors';
import store from 'store/store';

export const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  userData: selectUserData,
});

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      registerRequest,
      registerFailure,
      registerSuccess,
      sendSmsRequest,
      sendSmsFailure,
      sendSmsSuccess,
      verifyCodeRequest,
      verifyCodeFailure,
      verifyCodeSuccess,
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

  reduxForm({
    form: FORM_NAME,
    submitAsSideEffect: true,
    onSubmit: (values) => registerRequest(values),
  })
);
