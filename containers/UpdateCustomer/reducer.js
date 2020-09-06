import { REDUCER_NAME } from './consts';

import {
  UPDATE_CUSTOMER_REQUEST,
  UPDATE_CUSTOMER_FAILURE,
  UPDATE_CUSTOMER_SUCCESS,
} from './actions';

const initialState = {
  loading: false,
  errorMessage: null,
  userData: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CUSTOMER_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
        userData: action.payload.userData,
      };
    }

    case UPDATE_CUSTOMER_FAILURE: {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.errorMessage,
        userData: null,
      };
    }

    case UPDATE_CUSTOMER_SUCCESS: {
      return {
        ...state,
        loading: false,
        errorMessage: null,
        userData: action.payload.userData,
      };
    }

    default:
      return state;
  }
}
