import { REDUCER_NAME } from './consts';

import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_SEND_SMS_REQUEST,
  LOGIN_SEND_SMS_FAILURE,
  LOGIN_SEND_SMS_SUCCESS,
  LOGIN_VERIFY_REQUEST,
  LOGIN_VERIFY_FAILURE,
  LOGIN_VERIFY_SUCCESS,
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
    case LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
        userData: action.payload.userData,
      };
    }

    case LOGIN_FAILURE: {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.errorMessage,
        userData: action.payload.userData,
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        errorMessage: null,
        userData: action.payload.userData,
      };
    }

    case LOGIN_SEND_SMS_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
        userData: null,
        verificationCode: null,
        phoneNumberToVerify:null
        

      };
    }

    case LOGIN_SEND_SMS_FAILURE: {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.errorMessage,
        userData: null,
        verificationCode: null,
        phoneNumberToVerify:null
      };
    }

    case LOGIN_SEND_SMS_SUCCESS: {
      return {
        ...state,
        loading: false,
        errorMessage: null,
        userData: null,
        verificationCode: null,
        phoneNumberToVerify: action.payload,
      };
    }

    case LOGIN_VERIFY_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
        verificationCode: action.payload.verificationCode,
      };
    }

    case LOGIN_VERIFY_FAILURE: {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.errorMessage,
        verificationCode: null,
      };
    }

    case LOGIN_VERIFY_SUCCESS: {
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
