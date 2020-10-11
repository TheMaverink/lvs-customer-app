export const GET_BOOKINGS_REQUEST = 'GET_BOOKINGS_REQUEST';
export const GET_BOOKINGS_FAILURE = 'GET_BOOKINGS_FAILURE';
export const GET_BOOKINGS_SUCCESS= 'GET_BOOKINGS_SUCCESS';

export const getBookingsRequest = () => {
  return {
    type: GET_BOOKINGS_REQUEST,
 
  };
};

export const getBookingsFailure = (errorMessage) => {
  return {
    type: GET_BOOKINGS_FAILURE,
    payload: errorMessage,
  };
};

export const getBookingsSuccess = (bookings) => {
  return {
    type: GET_BOOKINGS_SUCCESS,
    payload: bookings,
  };
};

