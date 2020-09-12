import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  Animated,
} from 'react-native';
import { compose } from 'recompose';
import Header from './components/Header';
import Calendar from './components/Calendar';
import CalendarContainer from 'containers/Calendar';
import HourPicker from "./components/HourPicker"

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121314',
    flex: 1,
    justifyContent: 'center',
  },
});

// const Switch = ()=>{
//   return <Button title="Switch" onPress={changeMode}/>
// }

const CalendarView = (props) => {
  let [isHourMode, changeMode] = useState(false);

  const { selectedWash } = props;
  const position = new Animated.ValueXY({ x: 0, y: 0 });

  Animated.timing(position, {
    toValue: { x: 200, y: 500 },
  }).start();
  return (
    <View style={styles.container}>

      <Animated.Text style={{ color: 'white', transform: [{ translateX: position.x }] }}>
        ANimate Text
      </Animated.Text>

      <Header style={{ flex: 1 }} selectedWash={selectedWash} />
      {isHourMode ? (
        <HourPicker/>
      ) : (
        <Calendar {...props} style={{ flex: 1, borderRadius: 25 }} />
      )}

      <Button
        title={'Switch'}
        onPress={() => changeMode((isHourMode = !isHourMode))}
      />
    </View>
  );
};

export default compose(CalendarContainer)(CalendarView);
