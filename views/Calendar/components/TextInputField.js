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
    marginBottom:20
    // opacity:.6
  }
})
const TextInputField = ({ placeholder, input: { onChange, ...restInput } }) => {
  return (
    <View>
      <TextInput
        style={styles.inputText}
        onChangeText={onChange}
        placeholderStyle={styles.placeholder}
        placeholderTextColor="#A3A3A4"
        selectionColor="#ffffff"
        placeholder={placeholder}
        autoCapitalize="characters"
        keyboardAppearance={'dark'}
      ></TextInput>
    </View>
  );
  {
  }
};

export default TextInputField;
