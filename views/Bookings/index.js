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

const BookingsView = (props) => {
  const isFocused = useIsFocused();

  const { getBookingsRequest, bookings ,navigation} = props;

  const colorContext = React.useContext(StatusColorContext);

  let [updatedBookings, updateBookings] = useState(props.bookings);

console.log('NAVIGATION')
console.log(props.route.params)

  useEffect(() => {
    const run = async () => {
      await getBookingsRequest();
      await updateBookings(props.bookings);
    };

    if (isFocused) {
      console.log('updatedBookings');
      console.log(updatedBookings);

      run();
    }

   
  }, [isFocused]);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     const test = async () => {
  //       await alert('screen focus');
  //       await colorContext.changeAppViewColour('#1a1b1c');
  //       await getBookingsRequest();
  //     };

  //     test();

  //     return undefined;
  //   }, [])
  // );

  // useEffect(() => {
  //   const test = async () => {
  //     await navigation.addListener('focus', () => {
  //       console.log('focus');
  //     });
  //   };

  //   return test;
  //   // updateBookings(bookings);
  //   // console.log('updatedBookings');
  //   // console.log(updatedBookings);
  // }, [{ navigation }]);

  // const isFocused = useIsFocused();

  return (

    <React.Fragment>
      {!updatedBookings[0] || updatedBookings.length === [] ? (
        <NoBooking />
      ) : (
        // <ConfirmedBooking booking={updatedBookings[0]}></ConfirmedBooking>
        // <ConfirmedBooking booking={updatedBookings[0]}></ConfirmedBooking>
        <Text>LIst of bookings here</Text>
      )}
    </React.Fragment>

    // <Text>Bookings View</Text>
  );
};

export default compose(BookingsContainer)(BookingsView);
