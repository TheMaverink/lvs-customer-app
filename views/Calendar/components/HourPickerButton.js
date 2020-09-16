import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {COLORS} from 'consts'

const styles = {
  button: {
    borderWidth: 1,
    borderRadius: 30,
    height: '100%',
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  selectedButton:{
    borderWidth: 1,
    borderRadius: 30,
    height: '100%',
    backgroundColor: "'rgba(255, 213, 0, 1)'",
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 30,

  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  selectedText:{
    color: 'black',
    fontSize: 18,
  }
};

const HourPickerButton = (props) => {
  const slotHour = props.item;
  const { change, selectHourRequest, selectedHour } = props;
  // console.log(slotHour);
  // console.log(props);

  
  return (
    <TouchableOpacity
      style={selectedHour === slotHour ? styles.selectedButton : styles.button}
      onPress={() => selectHourRequest(slotHour)}
    >
      <Text style={selectedHour === slotHour ? styles.selectedText : styles.text}>{slotHour}</Text>
    </TouchableOpacity>
  );
};

export default HourPickerButton;
