import React, { useState } from 'react';
import { SafeAreaView, Platform, StyleSheet, Button } from 'react-native';
import styled from 'styled-components/native';
export const StatusColorContext = React.createContext();

const AppView = ({ children }) => {
  let [bckgdColor, setBckgdColor] = useState('#1a1b1c');
  const isAndroid = Platform.OS === 'android';

  const changeAppViewColour = (newColor) => {

    setBckgdColor((bckgdColor = newColor));
  };

  return (
    <StatusColorContext.Provider
      value={{
        bckgdColor,
        changeAppViewColour: changeAppViewColour,
        isAndroid,
      }}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: bckgdColor }}>
        {children}
      </SafeAreaView>
    </StatusColorContext.Provider>
  );
};

export default AppView;
