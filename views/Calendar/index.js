import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  Button,
  TouchableOpacity,
  Animated,
} from 'react-native';
import CardFlip from 'react-native-card-flip';
import { compose } from 'recompose';
import Header from './components/Header';
import Calendar from './components/Calendar';
import CalendarContainer from 'containers/Calendar';
// import HourPicker from './components/HourPicker';
import HourPicker from './components/HourPicker';
import VehicleForm from './components/VehicleForm';
import BaseButton from 'components/BaseButton';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121314',
    flex: 1,
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 1,
    // width: 320,
    // height: 470,
  },
});

class CalendarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //   areAllFieldsFilled(){
  // let calendarFormValues  = this.props.calendarFormValues
  //   }

  render() {
    const {
      selectedWash,
      change,
      calendarFormValues,
      handleSubmit,
    } = this.props;
    // console.log(Object.values(calendarFormValues))

    return (
      <View style={styles.container}>
        <Header style={{ flex: 1 }} selectedWash={selectedWash} />
        <CardFlip
          style={styles.cardContainer}
          ref={(card) => (this.card = card)}
        >
          <Calendar {...this.props} flipAction={() => this.card.flip()} />

          <HourPicker
            style={{ flex: 1 }}
            {...this.props}
            flipAction={() => this.card.flip()}
          />
        </CardFlip>
        <VehicleForm />
        <BaseButton
          title="Book"
          bgColor="grey"
          textColor="black"
          action={async (values) => {
            change('service', selectedWash);
            handleSubmit(values);
          }}
        />
      </View>
    );
  }
}

export default compose(CalendarContainer)(CalendarView);
