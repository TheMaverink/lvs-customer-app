import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import CardFlip from 'react-native-card-flip';
import { compose } from 'recompose';

import { BlurView } from 'expo-blur';

import Calendar from './components/Calendar';
import CalendarContainer from 'containers/Calendar';
import HourPicker from './components/HourPicker';
import VehicleForm from './components/VehicleForm';
import BaseButton from 'components/BaseButton';
import {calendarFormValidation} from 'utils/validations'

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
    height: height * 0.34,
    width: width * 0.95,
    marginHorizontal: width * 0.025,
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
      isValidated: false
    };
  }

  componentDidMount() {
    this.props.change('service', this.props.selectedWash);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        isValidated: calendarFormValidation(this.props.calendarFormValues),
      });

      calendarFormValidation(this.props.calendarFormValues)
    }
  }

  render() {
    const {
      selectedWash,
      change,
      calendarFormValues,
      handleSubmit,
      isLoading,
    } = this.props;



    return (
      <ScrollView style={styles.container}>
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

        {isLoading === true ? (
          <BlurView style={styles.absolute} intensity={70} tint="dark">
            <Text>Hello! I am bluring contents underneath</Text>
          </BlurView>
        ) : null}

        <VehicleForm />

        <View style={styles.buttonContainer}>
          <BaseButton
            title="Book"
            bgColor = {!this.state.isValidated ?  "rgba(216,216,216,.6)" : "rgba(216,216,216,1)"  }
            textColor="black"
            action={async (values) => {
         
              await handleSubmit(values);
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

export default compose(CalendarContainer)(CalendarView);
