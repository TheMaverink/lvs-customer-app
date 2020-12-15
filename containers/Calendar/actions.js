export const SELECT_DAY_REQUEST = 'SELECT_DAY_REQUEST';
export const SELECT_DAY_FAILURE = 'SELECT_DAY_FAILURE';
export const SELECT_DAY_SUCCESS = 'SELECT_DAY_SUCCESS';

export const RESET_DAY_REQUEST = 'RESET_DAY_REQUEST';

export const SELECT_HOUR_REQUEST = 'SELECT_HOUR_REQUEST';
export const SELECT_HOUR_FAILURE = 'SELECT_HOUR_FAILURE';
export const SELECT_HOUR_SUCCESS = 'SELECT_HOUR_SUCCESS';

export const RESET_HOUR_REQUEST = 'RESET_HOUR_REQUEST';

export const BOOKING_REQUEST = 'BOOKING_REQUEST';
export const BOOKING_FAILURE = 'BOOKING_FAILURE';
export const BOOKING_SUCCESS = 'BOOKING_SUCCESS';

export const GET_TIMES_REQUEST = 'GET_TIMES_REQUEST';
export const GET_TIMES_FAILURE = 'GET_TIMES_FAILURE';
export const GET_TIMES_SUCCESS = 'GET_TIMES_SUCCESS';

export const DAY_FREE_SLOTS_REQUEST = 'DAY_FREE_SLOTS_REQUEST';
export const DAY_FREE_SLOTS_FAILURE = 'DAY_FREE_SLOTS_FAILURE';
export const DAY_FREE_SLOTS_SUCCESS = 'DAY_FREE_SLOTS_SUCCESS';

export const GET_CLOSED_DAYS_REQUEST = 'GET_CLOSED_DAYS_REQUEST';
export const GET_CLOSED_DAYS_FAILURE = 'GET_CLOSED_DAYS_FAILURE';
export const GET_CLOSED_DAYS_SUCCESS = 'GET_CLOSED_DAYS_SUCCESS';

export const GET_BOOKED_DAYS_REQUEST = 'GET_BOOKED_DAYS_REQUEST';
export const GET_BOOKED_DAYS_FAILURE = 'GET_BOOKED_DAYS_FAILURE';
export const GET_BOOKED_DAYS_SUCCESS = 'GET_BOOKED_DAYS_SUCCESS';

export const getBookedDaysRequest = () => {
  return {
    type: GET_BOOKED_DAYS_REQUEST,
  };
};

export const getBookedDaysFailure = (errorMessage) => {
  return {
    type: GET_BOOKED_DAYS_FAILURE,
    payload: errorMessage,
  };
};

export const getBookedDaysSuccess = (bookedDays) => {
  return {
    type: GET_BOOKED_DAYS_SUCCESS,
    payload: bookedDays,
  };
};

//

export const getClosedDaysRequest = () => {
  return {
    type: GET_CLOSED_DAYS_REQUEST,
  };
};

export const getClosedDaysFailure = (errorMessage) => {
  return {
    type: GET_CLOSED_DAYS_FAILURE,
    payload: errorMessage,
  };
};

export const getClosedDaysSuccess = (closedDays) => {
  return {
    type: GET_CLOSED_DAYS_SUCCESS,
    payload: closedDays,
  };
};

//

export const dayFreeSlotsRequest = (day) => {
  return {
    type: DAY_FREE_SLOTS_REQUEST,
    payload: day,
  };
};

export const dayFreeSlotsFailure = (errorMessage) => {
  return {
    type: DAY_FREE_SLOTS_FAILURE,
    payload: errorMessage,
  };
};

export const dayFreeSlotsSuccess = (dayFreeSlots) => {
  return {
    type: DAY_FREE_SLOTS_SUCCESS,
    payload: dayFreeSlots,
  };
};

//

export const selectDayRequest = (day) => {
  return {
    type: SELECT_DAY_REQUEST,
    payload: day,
  };
};

export const selectDayFailure = (errorMessage) => {
  return {
    type: SELECT_DAY_FAILURE,
    payload: errorMessage,
  };
};

export const selectDaySuccess = (day) => {
  return {
    type: SELECT_DAY_SUCCESS,
    payload: day,
  };
};

//
export const selectHourRequest = (hour) => {
  return {
    type: SELECT_HOUR_REQUEST,
    payload: hour,
  };
};

export const resetDayRequest = () => {
  return {
    type: RESET_DAY_REQUEST,
  };
};

export const selectHourFailure = (errorMessage) => {
  return {
    type: SELECT_HOUR_FAILURE,
    payload: errorMessage,
  };
};

export const selectHourSuccess = (hour) => {
  return {
    type: SELECT_HOUR_SUCCESS,
    payload: hour,
  };
};

export const resetHourRequest = () => {
  return {
    type: RESET_HOUR_REQUEST,
  };
};

//

export const bookingRequest = (bookingData) => {
  return {
    type: BOOKING_REQUEST,
    payload: bookingData,
  };
};

export const bookingFailure = (errorMessage) => {
  return {
    type: BOOKING_FAILURE,
    payload: errorMessage,
  };
};

export const bookingSuccess = (bookingData) => {
  return {
    type: BOOKING_SUCCESS,
    payload: bookingData,
  };
};

///

export const getTimesRequest = () => {
  return {
    type: GET_TIMES_REQUEST,
  };
};

export const getTimesFailure = (errorMessage) => {
  return {
    type: GET_TIMES_FAILURE,
    payload: errorMessage,
  };
};

export const getTimesSuccess = (timesData) => {
  return {
    type: GET_TIMES_SUCCESS,
    payload: timesData,
  };
};

///
