export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const LOGIN_SEND_SMS_REQUEST = 'LOGIN_SEND_SMS_REQUEST';
export const LOGIN_SEND_SMS_FAILURE = 'LOGIN_SEND_SMS_FAILURE';
export const LOGIN_SEND_SMS_SUCCESS = 'LOGIN_SEND_SMS_SUCCESS';

export const LOGIN_VERIFY_REQUEST = 'LOGIN_VERIFY_REQUEST ';
export const LOGIN_VERIFY_FAILURE = 'LOGIN_VERIFY_FAILURE';
export const LOGIN_VERIFY_SUCCESS = 'LOGIN_VERIFY_SUCCESS';

//Register actions
export const loginRequest = (userData) => {
  return {
    type: LOGIN_REQUEST,
    payload: userData,
  };
};

export const loginFailure = (errorMessage) => {
  return {
    type: LOGIN_FAILURE,
    payload: errorMessage,
  };
};

export const loginSuccess = (userData) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userData,
  };
};

//sens sms actions
export const loginSendSmsRequest = (phoneNumber) => {
  return {
    type: LOGIN_SEND_SMS_REQUEST,
    payload: phoneNumber,
  };
};

export const loginSendSmsFailure = (errorMessage) => {
  return {
    type: LOGIN_SEND_SMS_FAILURE,
    payload: errorMessage,
  };
};

export const loginSendSmsSuccess = (phoneNumber) => {
  return {
    type: LOGIN_SEND_SMS_SUCCESS,
    payload: phoneNumber,
  };
};

//VerifyCode actions
export const loginVerifyRequest = (phoneNumber,verificationCode) => {
  return {
    type: LOGIN_VERIFY_REQUEST, 
    payload: {phoneNumber,verificationCode}
  };
};

export const loginVerifyFailure = (errorMessage) => {
  return {
    type: LOGIN_VERIFY_FAILURE,
    payload: errorMessage,
  };
};

export const loginVerifySuccess = (code) => {
  return {
    type: LOGIN_VERIFY_SUCCESS,
    payload: code,
  };
};