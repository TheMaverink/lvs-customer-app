import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:8080/api';
// axios.defaults.baseURL = 'http://lvsapi-env.eba-wfujhaxe.eu-west-2.elasticbeanstalk.com/api';

export const apiSendSms = (phoneNumber) => {
  console.log('api called')

  try {
    return axios.get(`/customer/login-send-sms/${phoneNumber}`);
  } catch (error) {
    return error;
  }
};

export const apiVerifyLogin = (phoneNumber, verificationCode) => {
 
  try {
  
    return axios.get(`/customer/login-verify/${phoneNumber}/${verificationCode}`);
  } catch (error) {
    return error;
  }
};

export const apiLogin = (phoneNumber) => {
  return axios.post(`/customer/login/${phoneNumber}`);
};
