import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
  container:{

  }
})

const SplashView = () => {
  return (
    <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0,0.15,1]}
        colors={['#1A1B1C', '#121213']}
        style={styles.gradientContainer}
      >
      <Text>SplashView </Text>
    </LinearGradient>
  );
};

export default SplashView ;


