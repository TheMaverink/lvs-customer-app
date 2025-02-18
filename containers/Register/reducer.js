import { REDUCER_NAME } from './consts';

import {
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  SEND_SMS_REQUEST,
  SEND_SMS_FAILURE,
  SEND_SMS_SUCCESS,
  VERIFY_CODE_REQUEST,
  VERIFY_CODE_FAILURE,
  VERIFY_CODE_SUCCESS,
} from './actions';

const initialState = {
  loading: false,
  errorMessage: null,
  userData: null,
  phoneNumberToVerify: null,
  verificationCode: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
        userData: action.payload.userData,
      };
    }

    case REGISTER_FAILURE: {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.errorMessage,
        userData: action.payload.userData,
      };
    }

    case REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        errorMessage: null,
        userData: action.payload.userData,
      };
    }

    case SEND_SMS_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
        userData: null,
        verificationCode: null,
        phoneNumberToVerify:null
        

      };
    }

    case SEND_SMS_FAILURE: {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.errorMessage,
        userData: null,
        verificationCode: null,
        phoneNumberToVerify:null
      };
    }

    case SEND_SMS_SUCCESS: {
      return {
        ...state,
        loading: false,
        errorMessage: null,
        userData: null,
        verificationCode: null,
        phoneNumberToVerify: action.payload,
      };
    }

    case VERIFY_CODE_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
        verificationCode: action.payload.verificationCode,
      };
    }

    case VERIFY_CODE_FAILURE: {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.errorMessage,
        verificationCode: null,
      };
    }

    case VERIFY_CODE_SUCCESS: {
      return {
        ...state,
        loading: false,
        errorMessage: null,
        verificationCode: action.payload.verificationCode,
      };
    }

    default:
      return state;
  }
}
