import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { Field } from 'redux-form';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form';

import CalendarContainer from 'containers/Calendar';
import HourPickerButton from './HourPickerButton';
import SlotHours from 'consts/SlotHours';
import SwitchCalendar from './SwitchCalendar';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: '#121213',
    height: height * 0.35,
    width: width * 0.95,
    marginHorizontal: width * 0.025,
    position:'relative',
    borderRadius:25
  },
  hourButtonsWrapper:{
    position: 'absolute',
    top:'15%',
    left: 0,
    right: 0,
    bottom: 0,


  }
});

const HourPicker = (props) => {
  const { change, selectHourRequest, selectedHour, flipAction } = props;

  return (
    <View> 
      <View style={styles.pickerContainer}>
        <FlatList style={styles.hourButtonsWrapper} 
          columnWrapperStyle={{ justifyContent: 'space-around', padding: 10 }}
          data={SlotHours}
          keyExtractor={(item) => item}
          numColumns={3}
          renderItem={({ item, index }) => (
            <HourPickerButton
              item={item}
              index={index}
              selectHourRequest={selectHourRequest}
              selectedHour={selectedHour}
              change={change}
            ></HourPickerButton>
          )}
        ></FlatList>


      </View>
      <SwitchCalendar action={flipAction} title="Click here to chose the day." />
    </View>
  );
};

export default HourPicker;
