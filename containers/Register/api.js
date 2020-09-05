import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

export const apiRegister = (userData) => {
  console.log('FROM API');
  console.log(userData);
  return axios.post('/customer/register', userData);
};

export const apiSendSms = (phoneNumber) => {
  try {
    return axios.get(`/customer/send-sms/${phoneNumber}`);
  } catch (error) {
    return error
  }
 
};

export const apiVerifyCode = (phoneNumber,verificationCode) => {
  console.log('api')
  console.log(phoneNumber)
  console.log(verificationCode)
  try {
    return axios.get(`/customer/verify/${phoneNumber}/${verificationCode}`);
  } catch (error) {
    return error
  }
 
};
