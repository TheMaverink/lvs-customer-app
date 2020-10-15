import React from 'react';

import { StyleSheet } from 'react-native';

import BookingsContainer from 'containers/Bookings';
import { compose } from 'recompose';

import ConfirmedBooking from './components/ConfirmedBooking';
import NoBooking from "./components/NoBooking"

import { useIsFocused } from '@react-navigation/native';
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
    <React.Fragment>
      {!props.route.params.bookingData ? (
        <NoBooking />
      ) : (
        // <ConfirmedBooking booking={updatedBookings[0]}></ConfirmedBooking>
        // <ConfirmedBooking booking={updatedBookings[0]}></ConfirmedBooking>

        <ConfirmedBooking
          booking={props.route.params.bookingData.booking}
        ></ConfirmedBooking>
      )}
    </React.Fragment>
  );
};

export default compose(BookingsContainer)(ConfirmationView);
