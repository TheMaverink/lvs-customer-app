import React, { useState } from 'react';
import { SafeAreaView, Platform, StyleSheet, Button } from 'react-native';
import styled from 'styled-components/native';
export const StatusColorContext = React.createContext();
// export const StatusColorContext = React.createContext({
//   statusColor: 'xixi',

//   changeAppViewColour: (color) => this.statusColor = color,
// });
// const AppView = styled(SafeAreaView)`
//   background: #1a1b1c;
//   flex: 1;
// `;

// export default ({ children }) => {
//   const isAndroid = Platform.OS === 'android';

//   return <AppView>{children}</AppView>;
// };

const AppView = ({ children }) => {
  let [bckgdColor, setBckgdColor] = useState('#1a1b1c');
  const isAndroid = Platform.OS === 'android';

  const changeAppViewColour = (newColor) => {
    console.log('changeAppViewColour triggered with color: ' + newColor)
    setBckgdColor((bckgdColor = newColor));
  };

  // const colorContext = React.useContext(StatusColorContext);

  return (
    <StatusColorContext.Provider value={{bckgdColor,changeAppViewColour: changeAppViewColour,isAndroid}}>
      <SafeAreaView style={{ flex: 1, backgroundColor: bckgdColor }}>
        {children}
        {/* <Button title="click" onPress={() => changeAppViewColour('#119900')} /> */}
      </SafeAreaView>
    </StatusColorContext.Provider> 
  );
};

// export {StatusColorContext}
export default AppView;
