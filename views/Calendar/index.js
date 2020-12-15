import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import CardFlip from 'react-native-card-flip';
import { compose } from 'recompose';

import { BlurView } from 'expo-blur';

import Calendar from './components/Calendar';
import CalendarContainer from 'containers/Calendar';
import HourPicker from './components/HourPicker';
import VehicleForm from './components/VehicleForm';
import BaseButton from 'components/BaseButton';
import { calendarFormValidation } from 'utils/validations';

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
    fontFamily: 'DMSans-Regular',
  },
  calendarContainer: {
    // height: height * 0.64,
    // height:500,
    width: width * 0.95,
    marginHorizontal: width * 0.025,
    height: 370,
  },
  buttonContainer: {},
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

class CalendarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidated: false,
      pickerDayOfTheWeek: 0,
      canShowPicker: false,
      currentSelectedDay: null,
      isHourPickerVisible: false,
    };

    this.handleHourPickerVisibility = this.handleHourPickerVisibility.bind(
      this
    );
    this.handleDayOfTheWeek = this.handleDayOfTheWeek.bind(this);
  }

  handleHourPickerVisibility = () => {
    this.setState({
      isHourPickerVisible: !this.state.isHourPickerVisible,
    });
  };

  handleDayOfTheWeek = (newIndex, day) => {
    this.setState({
      pickerDayOfTheWeek: newIndex,
      canShowPicker: true,
      currentSelectedDay: day,
    });
  };

  async componentDidMount() {
    this.props.change('service', this.props.selectedWash);

    this.props.getTimesRequest();
    this.props.resetDayRequest();
    this.props.getClosedDaysRequest();
    this.props.getBookedDaysRequest()

    // this.setState({

    // })
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        isValidated: calendarFormValidation(this.props.calendarFormValues),
      });

      calendarFormValidation(this.props.calendarFormValues);

      // this.setState({
      //   pickerDayOfTheWeek: dayOfTheWeekIndex,
      // });
    }
  }

  render() {
    const {
      selectedWash,
      change,
      calendarFormValues,
      handleSubmit,
      isLoading,
      openingTimes,
      dayFreeSlotsRequest,
      getClosedDaysRequest,
      closedDays,
      bookedDays
    } = this.props;

    // console.log('CALENDAR');

    // console.log(this.props);

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}
        contentContainerStyle={{ flex: 1 }}
        keyboardVerticalOffset={115}
      >
        <ScrollView style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerService}>{selectedWash}</Text>
            <Text style={styles.headerMessage}>Select a booking date.</Text>
          </View>
          

          <CardFlip
            style={styles.calendarContainer}
            ref={(card) => (this.card = card)}
          >
           
              <Calendar
                {...this.props}
                flipAction={() => this.card.flip()}
                handleDayOfTheWeek={this.handleDayOfTheWeek}
                canShowPicker={this.state.canShowPicker}
                dayFreeSlotsRequest={dayFreeSlotsRequest}
                isHourPickerVisible={this.state.isHourPickerVisible}
                handleHourPickerVisibility={this.handleHourPickerVisibility}
                closedDays={closedDays}
                bookedDays={bookedDays}
              />
           

            <HourPicker
              style={{ flex: 1 }}
              {...this.props}
              flipAction={() => this.card.flip()}
              openingTimes={openingTimes}
              pickerDayOfTheWeek={this.state.pickerDayOfTheWeek}
              canShowPicker={this.state.canShowPicker}
              dayFreeSlotsRequest={dayFreeSlotsRequest}
              dayFreeSlots={this.props.dayFreeSlots}
              currentSelectedDay={this.state.currentSelectedDay}
              isHourPickerVisible={this.state.isHourPickerVisible}
              handleHourPickerVisibility={this.handleHourPickerVisibility}
              isLoading={isLoading}
            />
          </CardFlip>

          {/* {isLoading === true ? (
            <BlurView style={styles.absolute} intensity={70} tint="dark">
              <Text>Loading</Text>
            </BlurView>
          ) : null} */}

          <VehicleForm />

          <View style={styles.buttomContainer}>
            {this.state.isValidated ? (
              <BaseButton
                title="Book"
                bgColor={'rgba(216,216,216,1)'}
                textColor="black"
                margin={20}
                action={async (values) => {
                  await handleSubmit(values);
                }}
                style={styles.buttonContainer}
              />
            ) : (
              <BaseButton
                title="Book"
                bgColor={'rgba(216,216,216,.6)'}
                textColor="black"
                margin={20}
                action={() => console.log('not allowed')}
                style={styles.buttonContainer}
              />
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default compose(CalendarContainer)(CalendarView);
