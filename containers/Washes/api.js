import axios from 'axios';
import { AsyncStorage } from 'react-native';

axios.defaults.baseURL = 'http://localhost:8080/api';

export const  apiGetWashes = async () => {

  const token = await AsyncStorage.getItem('token')
  const config = {
    headers: { Authorization: `Bearer ${ token }` },
  }
 
  try {
    return axios.get(`/services` );
  } catch (error) {
    return error;
  }
};

