import axios from 'axios';
import { AsyncStorage } from 'react-native';

// axios.defaults.baseURL = 'http://localhost:8080/api';
// axios.defaults.baseURL = 'http://lvsapi-env.eba-wfujhaxe.eu-west-2.elasticbeanstalk.com/api';

// eslint-disable-next-line import/prefer-default-export
export const apiGetBookings = async (token) => {

  const config = {
    headers: { 'Authorization': `Bearer ${ token }` },
  }

  return axios.get(`/bookings/customer/all`, config);
};

