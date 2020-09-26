import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const styles = ({
  inputText:{
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    color: '#ffffff',
    paddingBottom:5,
    fontSize:20,
    fontFamily: 'DMSans-Regular',
    opacity:.8
  }
})
const TextInputField = ({ placeholder, input: { onChange, ...restInput } }) => {
  return (
    <View>
      <TextInput
        style={styles.inputText}
        onChangeText={onChange}
        placeholderStyle={styles.placeholder}
        placeholderTextColor="#ffffff"
        selectionColor="#ffffff"
        placeholder={placeholder}
      ></TextInput>
    </View>
  );
  {
  }
};

export default TextInputField;
