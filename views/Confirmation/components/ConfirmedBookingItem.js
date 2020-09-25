import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  firstText: {
    opacity: 0.6,
    fontSize:16
  },
  secText: {
    fontSize:16
  },
});

const ConfirmedBookingItem = (props) => {
  const { firstText, secText } = props;
  return (
    <View>
      <Text style={styles.firstText}>{firstText}</Text>
      <Text style={styles.secText}>{secText}</Text>
    </View>
  );
};

export default ConfirmedBookingItem;
