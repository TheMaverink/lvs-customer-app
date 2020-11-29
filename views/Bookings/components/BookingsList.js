import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { MONTHS } from 'consts';
import ArrowRight from 'assets/icons/arrow-right.svg';
import * as RootNavigation from '../../../RootNavigation';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  bookings: {
    marginTop: 30,
    paddingHorizontal: '7%',
  },
  bookingsTitle: {
    color: '#D8D8D8',
    fontFamily: 'DMSans-Regular',
    opacity: 0.6,
    marginBottom: 25,
    textTransform: 'uppercase',
  },
  arrowRight: {
    position: 'absolute',
    top: '50%',
    right: '-5%',
    zIndex: 100,
    transform: [{ translateY: -8 }],
  },
  bookingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    width: '95%',
    marginBottom: 20,
    // justifyContent: 'space-between',
    padding: 5,
  },

  userInfo: {
    position: 'relative',
    height: 50,
    transform: [{ translateX: 5 }, { translateY: -5 }],
  },
  carInfo: {
    position: 'relative',
    width: '100%',
    height: 50,
    transform: [{ translateX: 5 }, { translateY: -5 }],
  },
  userInfoName: {
    color: '#D8D8D8',

    fontFamily: 'DMSans-Bold',
    position: 'absolute',
    left: '0%',
    top: '5%',
    transform: [{ translateX: 10 }],
  },
  userInfoService: {
    color: '#D8D8D8',
    fontFamily: 'DMSans-Regular',
    position: 'absolute',
    left: '60%',
    bottom: '5%',
    transform: [{ translateX: 10 }],
  },
  userInfoModel: {
    color: '#D8D8D8',
    fontFamily: 'DMSans-Regular',
    position: 'absolute',
    right: '10%',
    top: '5%',
    minWidth: 100,
  },
  userInfoPlate: {
    color: '#D8D8D8',
    fontFamily: 'DMSans-Regular',
    position: 'absolute',
    right: '10%',
    bottom: '5%',
    minWidth: 100,
    //  borderColor:'red',
    //  borderWidth:5
  },
  noBookingsContainer: {},
  noBookingsText: {
    color: 'white',
    fontFamily: 'DMSans-Regular',
    fontSize: 18,
    opacity: 0.8,
  },
});

const BookingListItem = (props) => {
  const {
    completed,
    name,
    service,
    vehicleMake,
    vehicleReg,
    bookingId,
    hour,
    duration,
    date,
    day,
    month,
    monthName,
  } = props;

  // console.log('!!')
  // console.log(props)

  return !completed ? (
    <TouchableOpacity
      style={styles.bookingItem}
      onPress={() => {
        
        RootNavigation.replace('Booking Confirmation', {
          screen: 'Booking Confirmation',
         
            bookingData: props,
       
        });
      }}
    >
      <View style={styles.arrowRight}>
        <ArrowRight />
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.userInfoName}>
          {day} {monthName}
        </Text>
        <Text style={styles.userInfoService}>
          {hour.toString().length < 2 ? '0' + hour + ':00' : hour + ':00'}
        </Text>
      </View>

      <View style={styles.carInfo}>
        <Text style={styles.userInfoModel}>{service}</Text>
        <Text style={styles.userInfoPlate}>{vehicleReg}</Text>
      </View>
    </TouchableOpacity>
  ) : null;
};

const BookingsList = (props) => {
  const { bookings } = props;

  return bookings ? (
    <View style={styles.bookings}>
      <Text style={styles.bookingsTitle}>Your Upcoming Bookings</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item._id}
        data={bookings}
        renderItem={({ item, index }) => {
          // console.log(item);
          return (
            <BookingListItem
              hour={item.hour}
              day={item.day}
              month={item.month}
              monthName={MONTHS[item.month - 1]}
              year={item.year}
              name={item.name}
              canceled={item.canceled}
              completed={item.completed}
              inProgress={item.inProgress}
              upcoming={item.upcoming}
              name={item.name}
              service={item.service}
              vehicleMake={item.vehicleMake}
              vehicleReg={item.vehicleReg}
              bookingId={item._id}
              duration={item.duration}
              date={item.date}
            />
          );
        }}
      ></FlatList>
    </View>
  ) : null;

  // const [selectedDayBookingsState, setSelectedDayBookings] = useState(
  //   selectedDayBookings
  // );

  // useEffect(() => {
  //   setSelectedDayBookings(selectedDayBookings);
  //   console.log(selectedDayBookingsState);
  // }, [selectedDayBookings]);

  // return (
  //   <View style={styles.bookings}>
  //     <Text style={styles.bookingsTitle}>BOOKING INFORMATION</Text>

  //     {props.selectedDayBookings && props.selectedDayBookings.length > 0 ? (
  //       <FlatList
  //         keyExtractor={(item, index) => item.vehicleMake + index}
  //         data={selectedDayBookingsState}
  //         extraData={selectedDayBookingsState}
  //         renderItem={({ item, index }) => {
  //           console.log(item);
  //           return (
  //             <BookingListItem
  //               name={item.name}
  //               service={item.service}
  //               vehicleMake={item.vehicleMake}
  //               vehicleReg={item.vehicleReg}
  //               completed={item.completed}
  //               bookingId={item._id}
  //               hour={item.hour}
  //               duration={item.duration}
  //               date={item.date}
  //             />
  //           );
  //         }}
  //       ></FlatList>
  //     ) : (
  //       <View>
  //         <Text style={styles.noBookingsText}>No Bookings for this day</Text>
  //       </View>
  //     )}
  //   </View>
  // );
};

export default BookingsList;
