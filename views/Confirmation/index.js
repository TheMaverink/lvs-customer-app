import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import ConfirmedBookingItem from './components/ConfirmedBookingItem'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  bookingContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '85%',
    borderTopRightRadius: 50,
  },
});
const ConfirmationView = () => {
  return (
    <View style={styles.container}>
    

      <View style={styles.bookingContainer}>

        <ConfirmedBookingItem firstText="kskss" secText="ddkke"/>
        <ConfirmedBookingItem/>
        <ConfirmedBookingItem/>
        <ConfirmedBookingItem/>



      </View>
    </View>
  );
};

export default ConfirmationView;
