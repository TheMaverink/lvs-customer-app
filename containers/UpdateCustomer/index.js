import { connect, useStore } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import reducer from './reducer';

import {
  updateCustomerRequest,
  updateCustomerFailure,
  updateCustomerSuccess,
} from './actions';

import { REDUCER_NAME } from './consts';

import { selectIsLoading, selectUserData ,selectPhoneNumber} from './selectors';
import store from 'store/store';

export const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  userData: selectUserData,
  phoneNumber:selectPhoneNumber
});

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      updateCustomerRequest,
      updateCustomerFailure,
      updateCustomerSuccess,
    },
    dispatch
  );

export default compose(
  connect(mapStateToProps, mapDispatchToProps),

  lifecycle({
    componentDidMount() {
      store.injectReducer(REDUCER_NAME, reducer);
    },
  })
);
