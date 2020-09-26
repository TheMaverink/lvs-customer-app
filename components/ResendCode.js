import React from 'react';
import * as RootNavigation from "../RootNavigation"
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
   flexDirection:'row',
   paddingTop: 10,
  },
  text: {
    fontFamily: 'DMSans-Regular',
    fontSize: 16,
    opacity: 0.6,
    color: 'white',
  },
  link: {
    paddingLeft: 10,
    fontFamily: 'DMSans-Regular',
    fontSize: 16,
    opacity: 1,
    color: 'white',
  },
});

const ResendCode = (props) => {
  const { switchTo } = props;

  return  (
    <View style={styles.container}>
      <Text style={styles.text}>Didn't receive a code?</Text>
      <Text onPress={()=> console.log('RESEND CODE')} style={styles.link}>Resend</Text>
     
    </View>
  ) 
};

export default ResendCode;
