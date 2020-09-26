import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import BaseButton from 'components/BaseButton';
import backgroundCar from '../../assets/images/car-bckgd.png';

import { WhitePortal } from 'react-native-portal';
import { COLORS } from 'consts/';
import img from '../../assets/logos/logo.png';
import RootNavigation from '../../RootNavigation';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: deviceWidth,
    height: '100%',
  },
  logoContainer: {
    width: deviceWidth,
    height: deviceHeight * 0.27,
    transform: [{ translateY: deviceHeight * 0.1 }],
  },
  logo: {
    height: '40%',
    width: undefined,
  },
  logoText: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  text: {
    color: 'white',
    width: '100%',
    height: deviceHeight * 0.12,
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 24,
    fontFamily: 'DMSans-Regular',
    opacity: 0.9,

    transform: [{ translateY: deviceHeight * -0.06 }],
  },
  image: {
    height: deviceHeight * 0.3,
    width: deviceWidth,
    opacity: 0.5,
    transform: [{ scale: 1.1 }],
  },
  buttonsContainer: {
    width: '100%',
    height: deviceHeight * 0.13,
    
  },
  membersText: {
    color: 'white',
    width: '100%',
    fontFamily: 'DMSans-Bold',
    fontSize: 14,
    padding: 40,
    textAlign: 'center',
    height: deviceHeight * 0.08,
  },
});

const AuthView = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />

      <View style={styles.logoContainer}>
        <Image resizeMode="contain" source={img} style={styles.logo}></Image>
        <Text style={styles.logoText}>Car Spa</Text>
      </View>

      <Image
        source={backgroundCar}
        resizeMode={'cover'}
        style={styles.image}
      />

      <Text style={styles.text}>
        Taking extraordinary to new heights.{'\n'}
        Private member's car wash
      </Text>

      <View style={styles.buttonsContainer}>
        <BaseButton
          title="Login"
          textColor="'rgba(255, 213, 0, 1)'"
          outlineColor="rgba(255, 213, 0, .7)"
          action={() => navigation.navigate('Login')}
        ></BaseButton>

        <BaseButton
          title="Sign up"
          bgColor="#FFFFFF"
          textColor="#121314"
          outlineColor="#FFFFFF"
          action={() => navigation.navigate('Register')}
        ></BaseButton>
      </View>

      <Text style={styles.membersText}>MEMBERS ONLY</Text>
    </View>
  );
};

export default AuthView;
