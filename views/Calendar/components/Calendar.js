import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { change } from 'redux-form';

import SwitchCalendar from "./SwitchCalendar"

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  calendar: {
    borderWidth: 1,
    borderRadius: 25,
    height: '100%',
  
  },
});

class CalendarWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todayDay: new Date().toISOString().substring(0, 10),
    };
  }

  render() {
    const {
      selectedDay,
      selectedHour,
      selectDayRequest,
      selectDayHour,
      flipAction,
      change,
    } = this.props;

    const today = this.state.todayDay;
    console.log(selectedDay);
    console.log(today);
    return (
      <View>
        <Calendar
          style={styles.calendar}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={Date()}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          // maxDate={'2012-05-30'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {
            // console.log('selected dayyy', day);

            selectDayRequest(day);
            change('selectedDay', day);
          }}
          monthFormat={'MMMM'}
        
          hideExtraDays={true}
          firstDay={1}
          onPressArrowLeft={(subtractMonth) => subtractMonth()}
          onPressArrowRight={(addMonth) => addMonth()}
          disableAllTouchEventsForDisabledDays={true}
          enableSwipeMonths={true}
          markedDates={{
            // '2020-09-16': {selected: true,  selectedColor: 'rgba(255, 213, 0, 1)'},
            [today]: {
              marked: true,
              dotColor: 'rgba(255, 213, 0, 1)',
              activeOpacity: 0,
            },
            [selectedDay]: {
              selected: true,
              marked: true,
              selectedColor: 'rgba(255, 213, 0, 1)',
              // activeOpacity: 0,
            },
          }}
          theme={{
            calendarBackground: '#121213',
            textSectionTitleColor: 'white',
            selectedDayTextColor: 'black',
            todayTextColor: 'white',
            todayTextFontWeight: 'bold',
            dayTextColor: 'white',
            textDisabledColor: '#d9e1e8',
            selectedDotColor: '#ffffff',
            arrowColor: 'white',
            disabledArrowColor: 'red',
            monthTextColor: 'white',
            indicatorColor: 'blue',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 14,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 14,
          }}
        />

        <SwitchCalendar action ={flipAction} title="Click here to chose time."/>
      </View>
    );
  }
}

export default CalendarWrapper;
