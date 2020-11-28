import {
  SELECT_DAY_REQUEST,
  SELECT_DAY_FAILURE,
  SELECT_DAY_SUCCESS,
  SELECT_HOUR_REQUEST,
  SELECT_HOUR_FAILURE,
  SELECT_HOUR_SUCCESS,
  RESET_HOUR_REQUEST,
  RESET_DAY_REQUEST,
  BOOKING_REQUEST,
  BOOKING_FAILURE,
  BOOKING_SUCCESS,
  GET_TIMES_REQUEST,
  GET_TIMES_FAILURE,
  GET_TIMES_SUCCESS,
} from './actions';

const initialState = {
  loading: false,
  errorMessage: null,
  selectedDay: null,
  selectedHour: null,
  bookingData:null,
  openingTimes: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_DAY_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
        selectedDay: null,
      };
    }

    case SELECT_DAY_FAILURE: {
      return {
        ...state,
        loading: false,
        selectedDay: null,
      };
    }

    case SELECT_DAY_SUCCESS: {
      return {
        ...state,
        loading: false,
        selectedDay: action.payload,
      };
    }

    case RESET_DAY_REQUEST: {
      return {
        ...state,
        loading: false,
        selectedDay: null,
      };
    }

    //

    case SELECT_HOUR_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
        selectedHour: null,
      };
    }

    case SELECT_HOUR_FAILURE: {
      return {
        ...state,
        loading: false,
        selectedHour: null,
      };
    }

    case SELECT_HOUR_SUCCESS: {
      return {
        ...state,
        loading: false,
        selectedHour: action.payload,
      };
    }

    case RESET_HOUR_REQUEST: {
      return {
        ...state,
        loading: false,
        selectedHour: null,
      };
    }

    //

    case BOOKING_REQUEST: {
      return {
        ...state,
        loading: true,
        bookingData:null
      };
    }

    case BOOKING_FAILURE: {
      return {
        ...state,
        loading: false,
        bookingData:null
      };
    }

    case BOOKING_SUCCESS: {
      return {
        ...state,
        loading: false,
        bookingData: action.payload,
      };
    }

    case GET_TIMES_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
        openingTimes: null,
      };
    }

    case GET_TIMES_FAILURE: {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
        openingTimes: null,
      };
    }

    case GET_TIMES_SUCCESS: {
      return {
        ...state,
        loading: false,
        errorMessage: null,
        openingTimes: action.payload,
      };
    }

    
    default:
      return state;
  }
}


