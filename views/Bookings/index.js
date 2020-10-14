import React, { useState, useEffect } from 'react';

import {
  StyleSheet,
  Text,

} from 'react-native';

import BookingsContainer from 'containers/Bookings';
import { compose } from 'recompose';
import moment from 'moment';
import Booking from './components/Booking';
import NoBooking from './components/NoBooking';
import store from 'store/store';
import {  useIsFocused } from '@react-navigation/native';
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

  const { getBookingsRequest, bookings, navigation } = props;

  const colorContext = React.useContext(StatusColorContext);

  let [updatedBookings, updateBookings] = useState(props.bookings);

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
       
      <Booking booking={updatedBookings[0]}></Booking>
      )}
    </React.Fragment>

    // <Text>Bookings View</Text>
  );
};

export default compose(BookingsContainer)(BookingsView);
