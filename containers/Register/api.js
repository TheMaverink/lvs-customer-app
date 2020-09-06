import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

export const apiSendSms = (phoneNumber) => {
  try {
    return axios.get(`/customer/send-sms/${phoneNumber}`);
  } catch (error) {
    return error;
  }
};

export const apiVerifyCode = (phoneNumber, verificationCode) => {
  try {
    return axios.get(`/customer/verify/${phoneNumber}/${verificationCode}`);
  } catch (error) {
    return error;
  }
};

export const apiRegister = (phoneNumber) => {
  return axios.post(`/customer/register/${phoneNumber}`);
};
