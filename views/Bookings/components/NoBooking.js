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
});

export default function NoBooking() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Sorry you have no bookings</Text>
      </View>
    </View>
  );
}
