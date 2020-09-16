import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { Field } from 'redux-form';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form';

import CalendarContainer from 'containers/Calendar';
import HourPickerButton from './HourPickerButton';
import SlotHours from 'consts/SlotHours';

const styles = {
  container: {},
};

const HourPicker = (props) => {
  // return <View>{props.children}</View>;
  const { change, selectHourRequest, selectedHour, flipAction } = props;

  return (
    <View>
      <FlatList
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
          ></HourPickerButton>
        )}
      ></FlatList>

      <TouchableOpacity onPress={() => flipAction()}>
        <Text style={{ color: 'white' }}>Click here to choose day</Text>
      </TouchableOpacity>
    </View>
  );

  {
    /* <HourPicker slotHours={SlotHours}/> */
  }
  return <HourPickerButton />;
};

export default HourPicker;
// export default compose(CalendarContainer)(HourPicker);
