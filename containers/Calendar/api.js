import axios from 'axios';
import { AsyncStorage } from 'react-native';

// axios.defaults.baseURL = 'http://localhost:8080/api';
// axios.defaults.baseURL = 'http://lvsapi-env.eba-wfujhaxe.eu-west-2.elasticbeanstalk.com/api';

// eslint-disable-next-line import/prefer-default-export
export const apiBooking = async (bookingData) => {
  console.log('from api');
  console.log(bookingData);
  // const token = await loadToken()
  // setAuthToken(token)

  // const config = {
  //   headers: { Authorization: `Bearer ${ token }` },
  // }

  return axios.post(`/bookings/new`, bookingData);
};
