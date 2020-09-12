import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { SCREENS, COLORS } from './consts'

import RegisterStep1View from "views/Register/Steps/Step1"
import RegisterStep2View from "views/Register/Steps/Step2"
import RegisterStep3View from "views/Register/Steps/Step3"

import LoginStep1View from "views/Login/Steps/Step1"
import LoginStep2View from "views/Login/Steps/Step2"


import SplashView from 'views/Splash';
import AuthView from 'views/Auth'
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
    <Stack.Navigator  headerMode='none' initialRouteName="Select Wash">
      <Stack.Screen name="Auth" component={AuthView} />
      <Stack.Screen name="Register" component={RegisterStack} />
      <Stack.Screen name="Login" component={LoginStack} />
      <Stack.Screen name="Select Wash" component={SelectWashView} />
      <Stack.Screen name="Calendar" component={CalendarView} />
      <Stack.Screen name="Splash" component={SplashView} />
      <Stack.Screen name="Wash Description" component={WashDescriptionView} />
    </Stack.Navigator>
  );
}

export function RegisterStack() {
  return (
    <Stack.Navigator initialRouteName="Register Step 1">
      <Stack.Screen name="Register Step 1" component={RegisterStep1View} />
      <Stack.Screen name="Register Step 2" component={RegisterStep2View} />
      <Stack.Screen name="Register Step 3" component={RegisterStep3View} />
    </Stack.Navigator>
  );
}

export function LoginStack() {
  return (
    <Stack.Navigator initialRouteName="Login Step 1">
      <Stack.Screen name="Login Step 1" component={LoginStep1View} />
      <Stack.Screen name="Login Step 2" component={LoginStep2View} />
     
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
