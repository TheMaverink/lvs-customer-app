import React from 'react';
import * as RootNavigation from '../RootNavigation';
import { Text, View, StyleSheet } from 'react-native';

const FormWarningMessage = (props) => {
  const { text, marginV } = props;

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',

      marginVertical: marginV,
    },
    text: {
      fontFamily: 'DMSans-Regular',
      fontSize: 16,
      opacity: 0.6,
      color: 'white',
    },
    link: {
      marginLeft: 20,
      fontFamily: 'DMSans-Bold',
      fontSize: 16,
      opacity: 1,
      color: 'white',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please enter a valid phone number.</Text>
    </View>
  );
};

export default FormWarningMessage;
