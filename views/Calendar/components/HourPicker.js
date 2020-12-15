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
import AnimatedEllipsis from 'react-native-animated-ellipsis';

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
  // loading:{
  //  position:'absolute',
  //  top:'30%',
  //  zIndex:500
  // }
});

const HourPicker = (props) => {
  const {
    change,
    selectHourRequest,
    selectedHour,
    flipAction,
    openingTimes,
    pickerDayOfTheWeek,
    canShowPicker,
    dayFreeSlotsRequest,
    currentSelectedDay,
    isHourPickerVisible,
    handleHourPickerVisibility,
    dayFreeSlots,
    isLoading,
  } = props;

  const [numColumnsState, setNumColumns] = useState(null);

  const handleFlip = () => {
    handleHourPickerVisibility();
    flipAction();
  };

  useEffect(() => {
    if (isHourPickerVisible === true) {
      dayFreeSlotsRequest(currentSelectedDay);
    }
  }, [isHourPickerVisible]);

  useEffect(() => {
    if (dayFreeSlots) {
      let numColumns;

      // setOpeningTimesRange(dayFreeSlots);
      if (dayFreeSlots.length % 3 === 0) {
        numColumns = 3;
      } else if (dayFreeSlots.length % 5 === 0) {
        numColumns = 5;
      } else {
        numColumns = 4;
      }

      setNumColumns(numColumns);
    }
  }, [dayFreeSlots, pickerDayOfTheWeek]);

  return (
    <View>
      <View style={styles.pickerContainer}>
        {isLoading ? (
          // <AnimatedEllipsis />
          <Text>Loading</Text>
        ) : numColumnsState ? (
          <FlatList
            style={styles.hourButtonsWrapper}
            columnWrapperStyle={{ justifyContent: 'space-around', padding: 10 }}
            data={dayFreeSlots}
            // keyExtractor={(item,index) => numColumnsState + index}
            key={numColumnsState + dayFreeSlots}
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

      {canShowPicker ? (
        <SwitchCalendar
          action={handleFlip}
          title="Click here to chose the day."
        />
      ) : null}
    </View>
  );
};

export default HourPicker;
