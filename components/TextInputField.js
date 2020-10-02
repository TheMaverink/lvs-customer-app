import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const styles = ({
  inputText:{
    borderBottomWidth: 0.7,
    borderBottomColor: '#ffffff',
    color: '#ffffff',
    paddingBottom:10,
    fontSize:16,
    fontFamily: 'DMSans-Regular',
    // opacity:.6
  }
})
const TextInputField = ({ placeholder, input: { onChange, ...restInput } }) => {
  return (
    <View style={{marginBottom:20}}>
      <TextInput
        style={styles.inputText}
        onChangeText={onChange}
        placeholderStyle={styles.placeholder}
        placeholderTextColor="#A3A3A4"
        selectionColor="#ffffff"
        placeholder={placeholder}
      ></TextInput>
    </View>
  );
  {
  }
};

export default TextInputField;
