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

const SwitchAuth = (props) => {
  const { switchTo } = props;

  return switchTo === 'login' ? (
    <View style={styles.container}>
      <Text style={styles.text}>
        Already a member?</Text><Text onPress={()=> RootNavigation.navigate('Login')} style={styles.link}>Login</Text>
      
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>
        Not a member?
      </Text><Text onPress={()=> RootNavigation.navigate('Register')}  style={styles.link}>Register</Text>
    </View>
  );
};

export default SwitchAuth;
