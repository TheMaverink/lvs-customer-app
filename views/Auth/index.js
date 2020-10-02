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
import backgroundCar from '../../assets/images/initial_screen_bckgd3.png';

import { WhitePortal } from 'react-native-portal';
import { COLORS } from 'consts/';
import img from '../../assets/logos/logo.png';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth,
    height: '100%',
  },
  logoContainer: {
    width: deviceWidth,
    position: 'absolute',
    top: deviceHeight * 0.08,
    // height: deviceHeight * 0.27,
    // transform: [{ translateY: deviceHeight * 0.1 }],
    zIndex: 3, // works on ios
  },
  logo: {
    height: 65,

    width: undefined,

    // elevation: 3, // works on android
  },
  logoText: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'DMSerifDisplay-Regular',
    zIndex: 3, // works on ios
    // elevation: 3, // works on android
  },
  imageContainer: {
    // flex: 0,
    width: '100%',
    // height: 'auto',
    position: 'relative',
    //   borderColor:'red',
    // borderWidth:2,
    marginTop: deviceHeight * 0.11,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 5,
  },
  image: {
    // height: deviceHeight * 0.5,
     
    // marginTop: deviceHeight * 0.18,
    width: deviceWidth,
    opacity: 0.65,
    transform: [{ scale: 1 }],
    zIndex: 0,
    // borderColor: 'green',
    // borderWidth: 2,
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
    bottom: '18%',
  },
 
  buttonsContainer: {
    width: '100%',
  
    // height: deviceHeight * 0.13,

    transform: [{ translateY: -deviceHeight * 0.05 }],
  },
  membersText: {
    color: 'white',
    width: '100%',
    fontFamily: 'DMSans-Bold',
    fontSize: 14,
    // padding: 5,
    textAlign: 'center',
    // height: deviceHeight * 0.12,
    borderColor: 'red',
    borderWidth: 1,
  },
});

const AuthView = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1B1C" />

      <View style={styles.logoContainer}>
        <Image resizeMode="contain" source={img} style={styles.logo}></Image>
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
