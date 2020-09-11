import { connect, useStore } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import reducer from './reducer';

import {
  selectDayRequest,
  selectDayFailure,
  selectDaySuccess,
  selectHourRequest,
  selectHourFailure,
  selectHourSuccess,
} from './actions';

import { REDUCER_NAME } from './consts';

import { selectDay,selectHour,selectWash} from './selectors';
import store from 'store/store';

export const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  selectedDay: selectDay,
  selectedHour: selectHour,
  selectedWas:selectWash
});

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      selectDayRequest,
      selectDayFailure,
      selectDaySuccess,
      selectHourRequest,
      selectHourFailure,
      selectHourSuccess,
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
