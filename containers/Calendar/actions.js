export const SELECT_DAY_REQUEST = 'SELECT_DAY_REQUEST';
export const SELECT_DAY_FAILURE = 'SELECT_DAY_FAILURE';
export const SELECT_DAY_SUCCESS= 'SELECT_DAY_SUCCESS';

export const SELECT_HOUR_REQUEST = 'SELECT_HOUR_REQUEST';
export const SELECT_HOUR_FAILURE = 'SELECT_HOUR_FAILURE';
export const SELECT_HOUR_SUCCESS = 'SELECT_HOUR_SUCCESS';

export const BOOKING_REQUEST = 'BOOKING_REQUEST';
export const BOOKING_FAILURE = 'BOOKING_FAILURE';
export const BOOKING_SUCCESS = 'BOOKING_SUCCESS';

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
