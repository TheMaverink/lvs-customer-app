import axios from 'axios';
import { AsyncStorage } from 'react-native';

// axios.defaults.baseURL = 'http://localhost:8080/api';
// axios.defaults.baseURL = 'http://lvsapi-env.eba-wfujhaxe.eu-west-2.elasticbeanstalk.com/api';

export const  apiGetServices = async () => {

  const token = await AsyncStorage.getItem('token')
  const config = {
    headers: { Authorization: `Bearer ${ token }` },
  }
 
  try {
    return axios.get(`/services/` );
  } catch (error) {
    return error;
  }
};

