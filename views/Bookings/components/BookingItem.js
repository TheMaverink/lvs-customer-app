import React from 'react';

import { Text, View, StyleSheet,Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingLeft: '7%',
    height: height * 0.1
  },
  firstText: {
    fontFamily: 'DMSans-Bold',
    fontSize: 16,
  },
  secText: {
    fontSize: 16,
    fontFamily: 'DMSans-Regular',
    opacity: 0.6,
  },
});

const ConfirmedBookingItem = (props) => {
  const { firstText, secText } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.firstText}>{firstText}</Text>
      <Text style={styles.secText}>{secText}</Text>
    </View>
  );
};

export default ConfirmedBookingItem;
