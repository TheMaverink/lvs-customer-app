import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableHighlight, Image } from 'react-native';

import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { SCREENS, COLORS } from './consts'

import RegisterStep1View from 'views/Register/Steps/Step1';
import RegisterStep2View from 'views/Register/Steps/Step2';
import RegisterStep3View from 'views/Register/Steps/Step3';

import LoginStep1View from 'views/Login/Steps/Step1';
import LoginStep2View from 'views/Login/Steps/Step2';

import SplashView from 'views/Splash';
import AuthView from 'views/Auth';
import CalendarView from 'views/Calendar';
import ConfirmationView from 'views/Confirmation';
import BookingsView from 'views/Bookings';
import LoginView from 'views/Login';
import RegisterView from 'views/Register';
import SelectWashView from 'views/SelectWash';
import WashDescriptionView from 'views/WashDescription';
import CarSpaIcon from './assets/icons/carspaIcon.svg';
import BookingsIcon from './assets/icons/bookingsIcon.svg';

import { navigationRef } from './RootNavigation';

const stackNavigationConfig = {
  screenOptions: {
    headerTitleStyle: {
      fontWeight: 'bold',
      headerShown: false,
    },
  },
};

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

export function BookingsStack() {
  return <Stack.Navigator
  headerMode="none" 
    screenOptions={{
      headerStyle: {
        backgroundColor: 'black',
        shadowRadius: 0,
        height: 55,
        shadowOffset: {
          height: 0,
        },
      },
      headerTintColor: '#fff',

      headerBackTitleStyle: {
        opacity: 0,
      },
    }}
    initialRouteName="Bookings"
  >
    <Stack.Screen
      name="Bookings"
      options={{ headerShown: false }}
      component={BookingsView}
    />
    <Stack.Screen
      name="Booking Confirmation"
      // options={{
      //   headerStyle: {
      //     backgroundColor: '#1a1b1c',
      //     marginLeft: 20,
      //     shadowRadius: 0,
      //     height: 45,
      //     shadowOffset: {
      //       height: 0,
      //     },
      //   },
      //   title: '',
      // }}
      component={ConfirmationView}
    />
  </Stack.Navigator>;
}

export function CarSpaStack() {
  return (
    // <Stack.Navigator headerMode="none" initialRouteName="Select Wash">
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
          shadowRadius: 0,
          height: 55,
          shadowOffset: {
            height: 0,
          },
        },
        headerTintColor: '#fff',

        headerBackTitleStyle: {
          opacity: 0,
        },
      }}
      // screenOptions={{
      //   headerTintColor: 'white',
      //   headerStyle: { backgroundColor: '#1A1B1C' },

      //   headerBackTitleVisible: false,
      // }}
      initialRouteName="Select Wash"
    >
      <Stack.Screen
        name="Select Wash"
        options={{ headerShown: false }}
        component={SelectWashView}
      />
      <Stack.Screen
        name="Calendar"
        options={{
          headerStyle: {
            backgroundColor: '#1a1b1c',
            marginLeft: 20,
            shadowRadius: 0,
            height: 45,
            shadowOffset: {
              height: 0,
            },
          },
          title: '',
        }}
        component={CalendarView}
      />
      <Stack.Screen
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          headerTintColor: '#1a1b1c',

          headerStyle: {
            backgroundColor: '#ffffff',
            headerTintColor: 'red',
            tintColor: 'red',
            shadowRadius: 0,
            height: 45,
            shadowOffset: {
              height: 0,
            },
          },
          title: '',
        }}
        name="Wash Description"
        component={WashDescriptionView}
      />
    </Stack.Navigator>
  );
}

export function RegisterStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'SIGN UP',
        headerStyle: {
          backgroundColor: 'black',
          height: 55,
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          },
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'DMSans-Bold',
        },
        headerBackTitleStyle: {
          opacity: 0,
        },
      }}
      initialRouteName="Register Step 1"
    >
      <Stack.Screen name="Register Step 1" component={RegisterStep1View} />
      <Stack.Screen name="Register Step 2" component={RegisterStep2View} />
      <Stack.Screen
        options={{
          title: 'WELCOME',
          headerTitleStyle: {
            fontFamily: 'DMSans-Bold',
          },
        }}
        name="Register Step 3"
        component={RegisterStep3View}
      />
    </Stack.Navigator>
  );
}

export function LoginStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'LOGIN',
        headerStyle: {
          backgroundColor: 'black',
          shadowRadius: 0,
          height: 55,
          shadowOffset: {
            height: 0,
          },
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'DMSans-Bold',
        },
        headerBackTitleStyle: {
          opacity: 0,
        },
      }}
      initialRouteName="Login Step 1"
    >
      <Stack.Screen name="Login Step 1" component={LoginStep1View} />
      <Stack.Screen name="Login Step 2" component={LoginStep2View} />
    </Stack.Navigator>
  );
}

export function MainTab() {
  return (
    <Tab.Navigator
      initialRouteName="Car Spa"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
          shadowRadius: 0,
          height: 55,
          shadowOffset: {
            height: 0,
          },
        },
        headerTintColor: '#fff',

        headerBackTitleStyle: {
          opacity: 0,
        },
      }}
      tabBarOptions={{
        style: {
          backgroundColor: '#121314',
          height: 60,
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          },
        },
        showLabel: false,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Car Spa') {
            return (
              <CarSpaIcon
                style={[
                  focused ? { opacity: 1 } : { opacity: 0.4 },
                  { transform: [{ translateX: 30 }] },
                ]}
              />
            );
          } else if (route.name === 'Bookings') {
            // console.log('ROUTE BOOKIN ICON')
            // console.log(route)
            return (
              <BookingsIcon
                style={[
                  focused ? { opacity: 1 } : { opacity: 0.4 },
                  { transform: [{ translateX: -30 }] },
                ]}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Car Spa" component={CarSpaStack} />
      <Tab.Screen name="Bookings" component={BookingsStack} />
    </Tab.Navigator>
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
        <Stack.Navigator initialRouteName="Auth" headerMode="none">
          <Stack.Screen name="Splash" component={SplashView} />
          <Stack.Screen name="Auth" component={AuthView} />
          <Stack.Screen name="Login" component={LoginStack} />
          <Stack.Screen name="Register" component={RegisterStack} />
          <Stack.Screen name="Select Wash" component={MainTab} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppNavigator;
