import axios from 'axios';
import setAuthToken from 'utils/setAuthToken';
import { AsyncStorage } from 'react-native';

// axios.defaults.baseURL = 'http://localhost:8080/api';
// axios.defaults.baseURL = 'http://lvsapi-env.eba-wfujhaxe.eu-west-2.elasticbeanstalk.com/api';

// eslint-disable-next-line import/prefer-default-export
export const apiBooking = async (bookingData, token) => {
  setAuthToken(token);
  // const token = await loadToken()
  // setAuthToken(token)

  // const config = {
  //   headers: { Authorization: `Bearer ${ token }` },
  //   // data: bookingData
  // }

  return axios.post(`/bookings/new`, bookingData);
};

export const apiGetTimes = async () => {
  return axios.get(`/shop/opening-times`);
};

export const apiDayFreeSlots = async (day) => {
  return axios.post(`/shop/opening-times/day-slots`, day);
};

export const apiGetClosedDays = async () => {
  return axios.get(`/shop/closed-days`);
};

export const apiGetBookedDays = async () => {
  return axios.get(`/shop/booked-days`);
};


