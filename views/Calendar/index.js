import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  Button,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import CardFlip from 'react-native-card-flip';
import { compose } from 'recompose';

import Calendar from './components/Calendar';
import CalendarContainer from 'containers/Calendar';
// import HourPicker from './components/HourPicker';
import HourPicker from './components/HourPicker';
import VehicleForm from './components/VehicleForm';
import BaseButton from 'components/BaseButton';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1B1C',
    width: width,
  },
  headerContainer: {
    height: height * 0.1,
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
  calendarContainer: {
    height: height * 0.35,
    width: width * 0.95,
    marginHorizontal: width * 0.025,
    // overflow:'hidden'
  },
  buttonContainer: {
    position: 'absolute',
    
    left: 0,
    right: 0,
    bottom: height * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class CalendarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      selectedWash,
      change,
      calendarFormValues,
      handleSubmit,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerService}>{selectedWash}</Text>
          <Text style={styles.headerMessage}>Select a booking date.</Text>
        </View>

        <CardFlip
          style={styles.calendarContainer}
          ref={(card) => (this.card = card)}
        >
          <Calendar {...this.props} flipAction={() => this.card.flip()} />

          <HourPicker
            style={{ flex: 1 }}
            {...this.props}
            flipAction={() => this.card.flip()}
          />
        </CardFlip>

        <VehicleForm />
        <View style={styles.buttonContainer}>
          <BaseButton
            title="Book"
            bgColor="grey"
            textColor="black"
            action={async (values) => {
              change('service', selectedWash);
              handleSubmit(values);
            }}
          />
        </View>
      </View>
    );
  }
}

export default compose(CalendarContainer)(CalendarView);
