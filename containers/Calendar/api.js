import axios from 'axios';
import { AsyncStorage } from 'react-native';

axios.defaults.baseURL = 'http://localhost:8080/api';

// eslint-disable-next-line import/prefer-default-export
export const apiBooking = async (bookingData) => {
  // const token = await loadToken()
  // setAuthToken(token)

  // const config = {
  //   headers: { Authorization: `Bearer ${ token }` },
  // }
  axios({
    method: 'post',
    url: '/bookings/new',
    data: {
      bookingData,
      // token: await token,
    },
  });
};
