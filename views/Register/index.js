import React from 'react';
import { StyleSheet, Text, View, ImageBackground ,Button} from 'react-native';
import { compose } from 'recompose'
import RegisterContainer from 'containers/Register'

const RegisterView = (props) => {
  const {sendSmsRequest} = props
 
  return (
    <View>
      <Text>RegisterView </Text>
      <Button title="trigger saga" onPress={sendSmsRequest}></Button>
    </View>
  );
};

export default compose(RegisterContainer)(RegisterView) ;
