import { connect, useStore } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import reducer from './reducer';
import FORM_NAME from './consts';

import {
  selectDayRequest,
  selectDayFailure,
  selectDaySuccess,
  selectHourRequest,
  selectHourFailure,
  selectHourSuccess,
  resetHourRequest,
  bookingRequest,
  bookingFailure,
  bookingSuccess,
  getTimesRequest,
  getTimesFailure,
  getTimesSuccess,
  resetDayRequest,
  dayFreeSlotsRequest,
  dayFreeSlotsFailure,
  dayFreeSlotsSuccess,
  getClosedDaysRequest,
  getClosedDaysFailure,
  getClosedDaysSuccess,
  getBookedDaysRequest,
  getBookedDaysFailure,
  getBookedDaysSuccess,
} from './actions';

import { REDUCER_NAME } from './consts';

import {
  selectDay,
  selectHour,
  selectWash,
  selectIsLoading,
  selectTimes,
  selectDayFreeSlots,
  selectClosedDays,
  selectBookedDays
} from './selectors';
import store from 'store/store';
const selector = formValueSelector('CALENDAR_FORM'); // <-- same as form name

export const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  selectedDay: selectDay,
  selectedHour: selectHour,
  selectedWash: selectWash,
  dayFreeSlots:selectDayFreeSlots,
  closedDays:selectClosedDays,
  bookedDays:selectBookedDays,
  calendarFormValues: (state) =>
    selector(state, 'vehicleMake', 'vehicleReg', 'selectedDay', 'selectedHour'),
    openingTimes: selectTimes,
});

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      selectDayRequest,
      selectDayFailure,
      selectDaySuccess,
      resetDayRequest,
      selectHourRequest,
      selectHourFailure,
      selectHourSuccess,
      resetHourRequest,
      bookingRequest,
      bookingFailure,
      bookingSuccess,
      getTimesRequest,
      getTimesFailure,
      getTimesSuccess,
      dayFreeSlotsRequest,
      dayFreeSlotsFailure,
      dayFreeSlotsSuccess,
      getClosedDaysRequest,
      getClosedDaysFailure,
      getClosedDaysSuccess,
      getBookedDaysRequest,
      getBookedDaysFailure,
      getBookedDaysSuccess,
    },
    dispatch
  );

export default compose(
  connect(mapStateToProps, mapDispatchToProps),

  lifecycle({
    componentDidMount() {
      //call washes here ?
      

      // store.injectReducer(REDUCER_NAME, reducer);
    },
  }),
  reduxForm({
    form: 'CALENDAR_FORM',
    submitAsSideEffect: true,
    destroyOnUnmount: false,
    onSubmit: (values) => (bookingRequest(values)),
  })
);
