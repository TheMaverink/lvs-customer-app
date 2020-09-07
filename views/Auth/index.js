import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import BaseButton from 'components/BaseButton';
const AuthView = ({navigation}) => {
  return (
    <View style={{ backgroundColor: '#121314', flex: 1 , justifyContent:'center'}}>
      <BaseButton
        title="Login"
        textColor="'rgba(255, 213, 0, 1)'"
        outlineColor='rgba(255, 213, 0, .7)'
        action={()=> navigation.navigate('Login')}
      ></BaseButton>

      <BaseButton
        title="Sign up"
        bgColor="#FFFFFF"
        textColor="#121314"
        outlineColor="#FFFFFF"
        action ={()=> navigation.navigate('Register')}
      ></BaseButton>
    </View>
  );
};

export default AuthView;
