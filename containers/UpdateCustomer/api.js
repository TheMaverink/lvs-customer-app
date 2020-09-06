import axios from 'axios';
import { AsyncStorage } from 'react-native';

axios.defaults.baseURL = 'http://localhost:8080/api';

export const  apiUpdateCustomer = async (data) => {

  const token = await AsyncStorage.getItem('token')
  const config = {
    headers: { Authorization: `Bearer ${ token }` },
  }
 
  try {
    return axios.patch(`/customer/update` , data,config);
  } catch (error) {
    return error;
  }
};

