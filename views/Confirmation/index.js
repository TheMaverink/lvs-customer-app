import React, {useEffect, useState} from 'react';

import { StyleSheet,Text } from 'react-native';

import BookingsContainer from 'containers/Bookings';
import { compose } from 'recompose';

import ConfirmedBooking from './components/ConfirmedBooking';
import NoBooking from "./components/NoBooking"

import { useIsFocused ,useFocusEffect} from '@react-navigation/native';
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

  const [bookingData, setBookingData] = useState(props.route.params.bookingData);

  useEffect(() => {
  //  alert('here')
    console.log('daqui')
    console.log(bookingData)
    setBookingData(props.route.params.bookingData);
   
  }, [isFocused]);

  useFocusEffect(
    React.useCallback(() => {
// alert('focused')
setBookingData(props.route.params.bookingData);
    })
  );

  // console.log('NAVIGATION');
  // console.log(props.route.params.bookingData.booking);

console.log('bele')
console.log(props.route)
  return (
    <React.Fragment>
      {!props.route.params.bookingData ? (
        <NoBooking />
      ) : (
        // <ConfirmedBooking booking={updatedBookings[0]}></ConfirmedBooking>
        // <ConfirmedBooking booking={updatedBookings[0]}></ConfirmedBooking>

        <ConfirmedBooking
          booking={bookingData}
        ></ConfirmedBooking>

      
      )}
    </React.Fragment>
  );
};

export default compose(BookingsContainer)(ConfirmationView);
