import React from 'react';
import * as RootNavigation from '../RootNavigation';
import { Text, View, StyleSheet } from 'react-native';


const SwitchAuth = (props) => {
  const { switchTo,marginV } = props;


const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    //  paddingTop: 10,
    // marginVertical: 25,
    marginVertical:marginV
   
  },
  text: {
    fontFamily: 'DMSans-Regular',
    fontSize: 16,
    opacity: 0.6,
    color: 'white',
  },
  link: {
    // marginLeft: 20,
    fontFamily: 'DMSans-Bold',
    fontSize: 16,
    opacity: 1,
    color: 'white',
  },
});

  return switchTo === 'login' ? (
    <View style={styles.container}>
      <Text style={styles.text}>Already a member?</Text>
      <Text
        onPress={() => RootNavigation.navigate('Login')}
        style={styles.link}
      >
        Login
      </Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>Not a member?</Text>
      <Text
        onPress={() => RootNavigation.navigate('Register')}
        style={styles.link}
      >
        Register
      </Text>
    </View>
  );
};

export default SwitchAuth;
