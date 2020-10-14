import { PortalProvider, WhitePortal } from 'react-native-portal';
import { View, Text, Image, StatusBar } from 'react-native';
import axios from 'axios';
import React from 'react';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';
import * as Font from 'expo-font';
import { API_URL } from 'consts';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';

enableScreens();

import AppNavigator from './AppNavigator';
import store from 'store/store';

import AppView from 'components/AppView';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontsLoaded: false,
      canAppRun: false,
    };
  }

  async componentDidMount() {
    await SplashScreen.preventAutoHideAsync();

    await Font.loadAsync({
      'DMSans-Regular': require('./assets/fonts/DMSans-Regular.ttf'),
      'DMSans-Bold': require('./assets/fonts/DMSans-Bold.ttf'),
      'DMSerifDisplay-Regular': require('./assets/fonts/DMSerifDisplay-Regular.ttf'),
    });

    const gif = require('./assets/images/splash.gif');
    await Asset.fromModule(gif).downloadAsync();

    this.setState(
      {
        fontsLoaded: true,
      },
      async () => {
        await SplashScreen.hideAsync(); //hide native splash
      }
    );

    setTimeout(() => {
      this.setState({ canAppRun: true });
    }, 3000);
  }

  render() {
    if (!this.state.canAppRun) {
      return (
        <View style={{ flex: 1 }}>
          <Image
            source={require('./assets/images/splash.gif')}
            onLoad={this._cacheResourcesAsync}
            resizeMode={'contain'}
            style={{ width: '100%', height: '100%' }}
          />
        </View>
      );
    }

    return (
      <PortalProvider>
        <Provider store={store}>
          <AppView>
            <StatusBar
              barStyle="light-content"
              backgroundColor="#1A1B1C"
              translucent={false}
            />
            <AppNavigator />
          </AppView>
          <WhitePortal name="portal" />
        </Provider>
      </PortalProvider>
    );
  }


}

export default App;
