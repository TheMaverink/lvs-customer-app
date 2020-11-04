import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import carImg from 'assets/images/cars/yellowcar.png';
import moment from 'moment';
import minutesConverter from 'utils/minutesConverter';
import ConfirmedBookingItem from './ConfirmedBookingItem';
import BaseButton from 'components/BaseButton';
import * as RootNavigation from '../../../RootNavigation';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { StatusColorContext } from 'components/AppView';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1B1C',
    justifyContent: 'flex-end',
    height: '100%',
  },
  headerContainer: {
    width: '100%',
    position: 'absolute',
    top: height * 0.05,
    left: 0,
    paddingLeft: '7%',
  },
  header: {
    // paddingTop: height * 0.03,
    color: 'white',
    fontSize: 24,
    fontFamily: 'DMSans-Regular',
    width: '70%',
    letterSpacing: -0.33,
    lineHeight: 32,
  },
  bookingContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '83%',
    borderTopRightRadius: 50,
  },
  washTitleContainer: {
    height: height * 0.13,
    justifyContent: 'center',
    paddingLeft: '7%',
  },
  washTitle: {
    fontSize: 32,
    fontFamily: 'DMSerifDisplay-Regular',
    lineHeight: 40,
  },
  washSubtitle: {
    fontSize: 16,
    fontFamily: 'DMSans-Regular',
    opacity: 0.6,
  },
  imageContainer: {
    height: height * 0.15,
    marginVertical: height * 0.035,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    transform: [{ translateX: -width * 0.25 }],
  },
  buttonContainer: {
    position: 'absolute',

    left: 0,
    right: 0,
    bottom: height * 0.01,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function ConfirmedBooking(props) {
  const {
    service,
    date,
    hour,
    duration,
    vehicleMake,
    vehicleReg,
  } = props.booking;

  // console.log('props.booking')
  // console.log(props.booking)

  // console.log('props')
  // console.log(props)

  // return <Text>jfjdkjd</Text>

  const formattedDuration = minutesConverter(duration);
  const formattedDay = moment(date).format('dddd Do MMMM').toString();
  const formattedHour = hour + ":00"

  // const isFocused = useIsFocused();

  return (
    <View style={styles.container}>
      {/* {isFocused ? <StatusBar barStyle="light-content" /> : null} */}

      <View style={styles.headerContainer}>
        <Text style={styles.header}>Booking Confirmed</Text>
      </View>

      <View style={styles.bookingContainer}>
        <View style={styles.washTitleContainer}>
          <Text style={styles.washTitle}>{service}</Text>
        </View>

        <ConfirmedBookingItem firstText={formattedDay} secText="LVS Car Spa" />

        <ConfirmedBookingItem
          firstText={formattedHour}
          secText={'Duration ' + formattedDuration}
        />

        <ConfirmedBookingItem
          firstText={vehicleMake}
          secText={vehicleReg.toUpperCase()}
        />

        <View style={styles.imageContainer}>
          <Image
            source={carImg}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>

        <View style={styles.buttonContainer}>
          <BaseButton
            title="done"
            bgColor="black"
            textColor="white"
            action={() =>
              RootNavigation.navigate('Car Spa', { screen: 'Select Wash' })
            }
          />
        </View>
      </View>
    </View>
  );
}
