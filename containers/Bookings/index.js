import { connect, useStore } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import reducer from './reducer';

import {
  getBookingsRequest,
  getBookingsFailure,
  getBookingsSuccess,
} from './actions';

import { REDUCER_NAME } from './consts';

import { selectBookings, selectIsLoading } from './selectors';
import store from 'store/store';

export const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  bookings: selectBookings,
});

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getBookingsRequest,
      getBookingsFailure,
      getBookingsSuccess,
    },
    dispatch
  );

export default compose(
  connect(mapStateToProps, mapDispatchToProps),

  lifecycle({
    componentDidMount() {
      //call washes here ?

      store.injectReducer(REDUCER_NAME, reducer);
    },
  })
);
