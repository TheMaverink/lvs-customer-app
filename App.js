import { PortalProvider, WhitePortal } from 'react-native-portal';
import { View, Text } from 'react-native';
import axios from 'axios';
import React from 'react';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';
import * as Font from 'expo-font';
import { API_URL } from 'consts';


enableScreens();

import AppNavigator from './AppNavigator';
import store from 'store/store';
import * as SplashScreen from 'expo-splash-screen';
import AppView from 'components/AppView';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontsLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'DMSans-Regular': require('./assets/fonts/DMSans-Regular.ttf'),
      'DMSans-Bold': require('./assets/fonts/DMSans-Bold.ttf'),
      'DMSerifDisplay-Regular': require('./assets/fonts/DMSerifDisplay-Regular.ttf'),
    });

    this.setState({
      fontsLoaded: true,
    });
  }



  render() {
    if (!this.state.fontsLoaded) return null;

    return (
      <PortalProvider>
        <Provider store={store}>
          <AppView>
            <AppNavigator />
          </AppView>
          <WhitePortal name="portal" />
        </Provider>
      </PortalProvider>
    );
  }
}

export default App;


