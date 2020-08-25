import { PortalProvider, WhitePortal } from 'react-native-portal';

import React from 'react';
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';

import { enableScreens } from 'react-native-screens';

import AppNavigator from './AppNavigator';
import store from 'store/store'

import AppView from './components/AppView';

export default function App() {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff111',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
