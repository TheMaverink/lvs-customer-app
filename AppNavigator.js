import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { SCREENS, COLORS } from './consts'

import SplashView from 'views/Splash';

import CalendarView from 'views/Calendar';
import ConfirmationView from 'views/Confirmation';
import LoginView from 'views/Login';
import RegisterView from 'views/Register';
import SelectWashView from 'views/SelectWash';
import WashDescriptionView from 'views/WashDescription';

import { navigationRef } from './RootNavigation';

const stackNavigationConfig = {
  screenOptions: {
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
};

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

export function CarSpaStack() {
  return (
    <Stack.Navigator initialRouteName="Sign Up">
      <Stack.Screen name="Sign Up" component={RegisterView} />
      <Stack.Screen name="Login" component={LoginView} />
      <Stack.Screen name="Select Wash" component={SelectWashView} />
      <Stack.Screen name="Calendar" component={CalendarView} />
      <Stack.Screen name="Splash" component={SplashView} />
      <Stack.Screen name="Wash Description" component={WashDescriptionView} />
    </Stack.Navigator>
  );
}

export function BookingsStack() {
  return (
    <Stack.Navigator initialRouteName="Bookings">
      <Tab.Screen name="Booking Confirmation" component={ConfirmationView} />
    </Stack.Navigator>
  );
}

class AppNavigator extends React.Component {
  render() {
    const { onNavChange } = this.props;
    return (
      <NavigationContainer
        ref={navigationRef}
        onNavigationStateChange={onNavChange}
        screenOptions={{ stackNavigationConfig }}
      >
        <Tab.Navigator initialRouteName="Car Spa">
          <Tab.Screen name="Car Spa" component={CarSpaStack} />
          <Tab.Screen name="Bookings" component={BookingsStack} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppNavigator;
