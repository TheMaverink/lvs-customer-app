import React, { useState, useEffect } from 'react';
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
    // height: '100%',
    height: 370,
    width: width * 0.95,
    // marginHorizontal: width * 0.025,
    justifyContent: 'center',
    overflow: 'visible',
    position: 'relative',
    borderRadius: 25,
  },
  hourButtonsWrapper: {
    marginVertical: '22%',
    overflow: 'visible',
  },
});

const HourPicker = (props) => {
  const {
    change,
    selectHourRequest,
    selectedHour,
    flipAction,
    openingTimes,
    pickerDayOfTheWeek,
    canShowPicker
  } = props;

  const [openingTimesRange, setOpeningTimesRange] = useState(null);
  const [numColumnsState, setNumColumns] = useState(null);

  useEffect(() => {
    const range = (start, stop, step) =>
      Array.from(
        { length: (stop - start) / step + 1 },
        (_, i) => start + i * step
      );

    if (openingTimes) {
      const start = openingTimes[pickerDayOfTheWeek].periods[0].start;
      const end = openingTimes[pickerDayOfTheWeek].periods[0].end;
      let numColumns;

      const hoursRange = range(start, end, 1);

      setOpeningTimesRange(hoursRange);
      if (hoursRange.length % 3 ===0){
        numColumns = 3
      }else if(hoursRange.length % 5 ===0){
        numColumns = 5
      }else{
        numColumns = 4
      }

      setNumColumns(numColumns)
      console.log('openingTimesRange');
      console.log(openingTimesRange);
    }
  }, [openingTimes,pickerDayOfTheWeek]);

  return (
    <View>
      <View style={styles.pickerContainer}>
        {numColumnsState ? (
          <FlatList
            style={styles.hourButtonsWrapper}
            columnWrapperStyle={{ justifyContent: 'space-around', padding: 10 }}
            data={openingTimesRange }
            // keyExtractor={(item,index) => numColumnsState + index}
            key = {numColumnsState + openingTimesRange}
            numColumns={numColumnsState}
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
        ) : null}
      </View>
      {/* <SwitchCalendar
        action={flipAction}
        title="Click here to chose the day."
      /> */}
             {canShowPicker ?  <SwitchCalendar action={flipAction} title="Click here to chose the day." /> : null} 

    </View>
  );
};

export default HourPicker;
