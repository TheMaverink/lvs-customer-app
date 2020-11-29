import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { compose } from 'recompose';
import BookingsContainer from 'containers/Bookings';
import BookingsList from './components/BookingsList';
import moment from 'moment';
import { useFocusEffect } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

const todayDate = moment(new Date()).format('dddd Do MMMM').toString();
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1B1C',
    width: width,
    paddingVertical: 10,
  },
  headerContainer: {
    // height: height * 0.1,
    justifyContent: 'center',
    marginBottom: height * 0.06,
  },
  headerService: {
    fontSize: 40,
    color: '#FFFFFF',
    lineHeight: 48,
    fontFamily: 'DMSerifDisplay-Regular',
    paddingTop: '7%',
    paddingHorizontal: '7%',
    color: 'white',
  },
  headerMessage: {
    opacity: 0.8,
    fontSize: 16,
    color: 'white',
    letterSpacing: -0.01,
    lineHeight: 24,
    paddingHorizontal: '7%',
    // paddingTop: '3%',
    fontFamily: 'DMSans-Regular',
  },
});

const BookingsView = (props) => {
  const { getBookingsRequest, bookings, navigation } = props;

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getBookingsRequest();
    }
  }, [isFocused]);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerService}>Bookings</Text>
        <Text style={styles.headerMessage}>{todayDate}</Text>
      </View>

      <BookingsList bookings={bookings} />
    </View>
  );
};

export default compose(BookingsContainer)(BookingsView);
