import React, { useState, useEffect } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import HeaderMessage from '../../components/HeaderMessage';
import ConfirmedBookingItem from './components/ConfirmedBookingItem';
import carImg from '../../assets/images/cars/car1.png';
import BaseButton from '../../components/BaseButton';
import * as RootNavigation from '../../RootNavigation';
import minutesConverter from 'utils/minutesConverter';
import BookingsContainer from 'containers/Bookings';
import { compose } from 'recompose';
import moment from 'moment';
import ConfirmedBooking from './components/ConfirmedBooking';
import NoBooking from './components/NoBooking';
import store from 'store/store';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { StatusColorContext } from 'components/AppView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1B1C',
    justifyContent: 'flex-end',
    height: '100%',
  },
});

const ConfirmationView = (props) => {
  const isFocused = useIsFocused();

  const colorContext = React.useContext(StatusColorContext);

  console.log('NAVIGATION');
  console.log(props.route.params.bookingData.booking);

  return (
    <ConfirmedBooking
      booking={props.route.params.bookingData.booking}
    ></ConfirmedBooking>
  );
};

export default compose(BookingsContainer)(ConfirmationView);
