import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Animated,
  Dimensions,
} from 'react-native';

import BaseButton from 'components/BaseButton';
import backgroundCar from '../../assets/images/initial_screen_bckgd3.png';

import { create, PREDEF_RES } from 'react-native-pixel-perfect';
import { WhitePortal } from 'react-native-portal';
import { COLORS } from 'consts/';
import img from '../../assets/logos/logo.png';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const perfectSize = create(PREDEF_RES.iphoneX.dp);

const styles = StyleSheet.create({
  opacityAnim: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    backgroundColor: 'black',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: deviceWidth,
    height: '100%',
  },
  logoContainer: {
    width: deviceWidth,
    position: 'absolute',
    top: perfectSize(65),
    zIndex: 3,
  },
  logo: {
    height: perfectSize(75),
    width: undefined,
  },
  logoText: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    marginTop: perfectSize(20),
    fontFamily: 'DMSerifDisplay-Regular',
    zIndex: 3,
  },
  imageContainer: {
    width: '100%',
    position: 'relative',
    marginTop: perfectSize(130),
    height: perfectSize(400),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: deviceWidth,
    opacity: 0.65,
    zIndex: 0,
  },
  text: {
    color: 'white',
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'DMSans-Regular',
    opacity: 0.8,
    position: 'absolute',
    bottom: perfectSize(30),
  },

  buttonsContainer: {
    width: '100%',
    // transform: [{ translateY: -deviceHeight * 0.05 }],
    // transform: [{ translateY: -perfectSize(50) }],
  },
  membersText: {
    color: 'white',
    width: '100%',
    fontFamily: 'DMSans-Bold',
    fontSize: 14,
    textAlign: 'center',
    marginTop: perfectSize(20),
  },
});

const AuthView = ({ navigation }) => {
  const opacity = useState(new Animated.Value(0))[0];

  function fadeIn() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }

  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <View style={{ backgroundColor: 'black' }}>
      <Animated.View style={{ width: '100%', height: '100%', opacity }}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#1A1B1C" />

          <View style={styles.logoContainer}>
            <Image
              resizeMode="contain"
              source={img}
              style={styles.logo}
            ></Image>
            <Text style={styles.logoText}>Car Spa</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={backgroundCar}
              resizeMode={'cover'}
              style={styles.image}
            />

            <Text style={styles.text}>
              Taking extraordinary to new heights.{'\n'}
              Private member's car wash
            </Text>
          </View>

          <View style={styles.buttonsContainer}>
            <BaseButton
              title="Login"
              textColor="'rgba(255, 213, 0, 1)'"
              outlineColor="rgba(255, 213, 0, .7)"
              action={() => navigation.navigate('Login')}
              margin={10}
            ></BaseButton>

            <BaseButton
              title="Sign up"
              bgColor="#FFFFFF"
              textColor="#121314"
              outlineColor="#FFFFFF"
              action={() => navigation.navigate('Register')}
            ></BaseButton>
            <Text style={styles.membersText}>MEMBERS ONLY</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default AuthView;
