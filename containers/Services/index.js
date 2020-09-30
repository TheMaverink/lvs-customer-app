import { connect, useStore } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import reducer from './reducer';

import {
  getServicesRequest,
  getServicesFailure,
  getServicesSuccess,
} from './actions';

import { REDUCER_NAME } from './consts';

import {
  selectIsLoading,
  selectService,
  selectSubServices,
} from './selectors';
import store from 'store/store';

export const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  service: selectService,
  subServices: selectSubServices,
});

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getServicesRequest,
      getServicesFailure,
      getServicesSuccess,
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
