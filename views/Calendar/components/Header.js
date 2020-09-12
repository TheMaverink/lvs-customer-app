import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    color: 'white',
    fontSize: 24,
  },
  subHeader: {
    color: 'white',
  },
});

const Header = (props) => {
  // console.log(props);
  return (
    <View>
      <Text style={styles.header}>{props.selectedWash}</Text>
      <Text style={styles.subHeader}>Select a booking date</Text>
    </View>
  );
};

export default Header;
