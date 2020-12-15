import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from 'consts';

const styles = StyleSheet.create({
  // button: {
  //   borderWidth: 1,
  //   borderRadius: 30,
  //   height: '100%',
  //   backgroundColor: 'black',
  //   borderWidth: 1.8,
  //   borderColor: 'white',
  //   paddingVertical: 7,
  //   paddingHorizontal: 18,
  // },
  // selectedButton: {
  //   borderWidth: 1,
  //   borderRadius: 30,
  //   height: '100%',
  //   backgroundColor: "'rgba(255, 213, 0, 1)'",
  //   borderWidth: 1,
  //   borderColor: 'white',
  //   paddingVertical: 7,
  //   paddingHorizontal: 18,
  // },
  selectedButton: {
    height: 32,
    width: 72,
    borderColor: '#FFD500',
    borderRadius: 8,
    borderWidth: 1.6,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: "'rgba(255, 213, 0, 1)'",
  },
  button: {
    // width: '36%',
    height: 32,
    width: 72,

    borderColor: '#FFD500',

    borderRadius: 8,
    borderWidth: 1.6,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  selectedText: {
    color: 'black',
    fontSize: 16,
    fontWeight:'600',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

const HourPickerButton = (props) => {
  const slotHour = props.item;
  const { change, selectHourRequest, selectedHour } = props;
  // console.log(slotHour);
  // console.log(props);

  return (
    <TouchableOpacity
      style={selectedHour === slotHour ? styles.selectedButton : styles.button}
      onPress={() => {
        selectHourRequest(slotHour);
        change('selectedHour', slotHour);
      }}
    >
      <Text
        style={selectedHour === slotHour ? styles.selectedText : styles.text}
      >
        {slotHour.toString().length > 1 ? slotHour : '0' + slotHour}:00
      </Text>
    </TouchableOpacity>
  );
};

export default HourPickerButton;
