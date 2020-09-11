import { REDUCER_NAME } from './consts';

import {
  SELECT_DAY_REQUEST,
  SELECT_DAY_FAILURE,
  SELECT_DAY_SUCCESS,
  SELECT_HOUR_REQUEST,
  SELECT_HOUR_FAILURE,
  SELECT_HOUR_SUCCESS,
} from './actions';

const initialState = {
  loading: false,
  errorMessage: null,
  selectedDay: null,
  selectedHour: null,
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
    default:
      return state;
  }
}


