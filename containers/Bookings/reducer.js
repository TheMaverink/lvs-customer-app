import { REDUCER_NAME } from './consts';

import {
 GET_BOOKINGS_REQUEST,
 GET_BOOKINGS_FAILURE,
 GET_BOOKINGS_SUCCESS,

} from './actions';

const initialState = {
  loading: false,
  errorMessage: null,
  bookings:[]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case GET_BOOKINGS_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
        bookings: [],
      };
    }

    case GET_BOOKINGS_FAILURE: {
      return {
        ...state,
        loading: false,
        bookings: [],
      };
    }

    case GET_BOOKINGS_SUCCESS: {
      return {
        ...state,
        loading: false,
        bookings: action.payload,
      };
    }

  
    default:
      return state;
  }
}


