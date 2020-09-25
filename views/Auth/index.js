import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import BaseButton from 'components/BaseButton';
import backgroundCar from '../../assets/images/car-bckgd.png';

import { WhitePortal } from 'react-native-portal';
import { COLORS } from 'consts/';
import img from '../../assets/logos/logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
 
  },
  logo: {
   
    flex: 1,
     marginTop: 50,
     width:100
   
  },
  logoText: {
    fontSize: 32,
    color: 'white',
    width: '200%',
    textAlign: 'center',
    marginTop: 10,
  },
  text: {
    // flex: 1,
    padding:30,
    color: 'white',
    width: '80%',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'DMSans-Regular',
  
  },
  image: {
    flex: 2,
    width: '100%',
    opacity: 0.4,
   
  },
  buttonsContainer: {
    flex: 1,
    width: '100%',
  
  },
  membersText: {
    // flex: 1,
    color: 'white',
    fontFamily: 'DMSans-Bold',
    fontSize: 14,

  },
});

const AuthView = ({ navigation }) => {
  return (
    <View style={styles.container}>
    
      <Image
        resizeMode="contain"
        source={img}
        style={styles.logo}
      ></Image>

      <Text style={styles.logoText}>Car Spa</Text>
      <Image source={backgroundCar} resizeMode={'cover'} style={styles.image} />

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
