export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const SEND_SMS_REQUEST = 'SEND_SMS_REQUEST';
export const SEND_SMS_FAILURE = 'SEND_SMS_FAILURE';
export const SEND_SMS_SUCCESS = 'SEND_SMS_SUCCESS';

export const VERIFY_CODE_REQUEST = 'VERIFY_CODE_REQUEST';
export const VERIFY_CODE_FAILURE = 'VERIFY_CODE_FAILURE';
export const VERIFY_CODE_SUCCESS = 'VERIFY_CODE_SUCCESS';

//Register actions
export const registerRequest = (userData) => {
  return {
    type: REGISTER_REQUEST,
    payload: userData,
  };
};

export const registerFailure = (errorMessage) => {
  return {
    type: REGISTER_FAILURE,
    payload: errorMessage,
  };
};

export const registerSuccess = (userData) => {
  return {
    type: REGISTER_SUCCESS,
    payload: userData,
  };
};

//SendSms actions
export const sendSmsRequest = (phoneNumber) => {
  return {
    type: SEND_SMS_REQUEST,
    payload: phoneNumber,
  };
};

export const sendSmsFailure = (errorMessage) => {
  return {
    type: SEND_SMS_FAILURE,
    payload: errorMessage,
  };
};

export const sendSmsSuccess = (phoneNumber) => {
  return {
    type: SEND_SMS_SUCCESS,
    payload: phoneNumber,
  };
};

//VerifyCode actions
export const verifyCodeRequest = (code) => {
  return {
    type: VERIFY_CODE_REQUEST, 
    payload: code,
  };
};

export const verifyCodeFailure = (errorMessage) => {
  return {
    type: VERIFY_CODE_FAILURE,
    payload: errorMessage,
  };
};

export const verifyCodeSuccess = (code) => {
  return {
    type: VERIFY_CODE_SUCCESS,
    payload: code,
  };
};