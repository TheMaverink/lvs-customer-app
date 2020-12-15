import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  // TouchableOpacity,
  TouchableNativeFeedback,
  Dimensions,
  Image,
} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler'

const { width, height } = Dimensions.get('window');

import Arrow from '../../../assets/icons/arrow.png';

const styles = StyleSheet.create({
  switchCalendar: {
    zIndex:9000,
    elevation:9000,
    marginHorizontal: width * 0.025,
    marginTop:30,
    // paddingHorizontal: '7%',
    // paddingTop: 20,
// position:'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // transform: [{ translateY: '15%' }], -> dont work on android
  },
  switchCalendarText: {
    opacity: 0.8,
    fontSize: 20,
    color: 'white',
    letterSpacing: -0.01,
    lineHeight: 24,
    fontFamily: 'DMSans-Regular',
  },
  switchCalendarImage: {
    transform: [{ rotate: '180deg' }],
  },
});

const SwitchCalendar = (props) => {
  const { title,action } = props;
  return (
    <TouchableOpacity
      onPress={() => action()}
      style={styles.switchCalendar}
    >
      
      <Text style={styles.switchCalendarText}>{title}</Text>
      <Image style={styles.switchCalendarImage} source={Arrow} />

  

    </TouchableOpacity>
  );
};

export default SwitchCalendar;
