import { PortalProvider, WhitePortal } from 'react-native-portal'

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { enableScreens } from 'react-native-screens'

import AppNavigator from './AppNavigator'

import AppView from './components/AppView'

export default function App() {
  return (
    <PortalProvider>
      <AppView>
        <AppNavigator/>
      </AppView>

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
