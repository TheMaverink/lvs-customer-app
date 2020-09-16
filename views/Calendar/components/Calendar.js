import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { change } from 'redux-form';

const styles = StyleSheet.create({
  calendar: {
    borderWidth: 1,
    borderRadius: 25,
    height: '80%',
  },
});

class CalendarWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todayDay: new Date().toISOString().substring(0, 10),
      //maxDate -> Calculate 6 months ahead
    };
  }

  render() {
    const {
      selectedDay,
      selectedHour,
      selectDayRequest,
      selectDayHour,
      flipAction,
      change
    } = this.props;

    const today = this.state.todayDay
console.log(selectedDay)
console.log(today)
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
            change('selectedDay', day)
          }}
          monthFormat={'MMMM'}
          onMonthChange={(month) => {
            console.log('month changed', month);
          }}
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
            [selectedDay]:{
              selected: true, 
              marked: true,
              selectedColor: 'rgba(255, 213, 0, 1)',
              // activeOpacity: 0,
              
            }
          }}
          theme={{
            calendarBackground: 'black',
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
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
        />

        <TouchableOpacity onPress={() => flipAction()}>
          <Text style={{ color: 'white' }}>Click here to choose time</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CalendarWrapper;
