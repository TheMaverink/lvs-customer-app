import React from 'react';
import { SafeAreaView, Platform,StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const styles = StyleSheet.create({
  container:{
    backgroundColor:'black',
    flex:1

  }

})

const AppView = styled(SafeAreaView)`
  background: #121314;
  flex: 1;
`;



export default ({ children }) => {
  const isAndroid = Platform.OS === 'android';

  return <AppView style={styles.container}>{children}</AppView>;
};
