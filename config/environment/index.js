import Constants from 'expo-constants'
import { Platform } from 'react-native'
import axios from 'axios'

const localhost = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2'

const ENV = {
  dev: {
    API_URL: `http://${ localhost }:8080/api/`,
  },
  production: {
    API_URL:
      'http://lvsapi-env.eba-wfujhaxe.eu-west-2.elasticbeanstalk.com/api',
  },
}

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (__DEV__) {
    axios.defaults.baseURL = ENV.dev.API_URL
    return ENV.dev
  }else{
    axios.defaults.baseURL = ENV.production.API_URL
    return ENV.production
    // throw new Error(`Production env vars is not configured yet.
    // Please, set it in config/environment/index.js file`);

  }

}

export default getEnvVars
