import React from 'react';
import { SvgUri } from 'react-native-svg';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import ValidIcon from 'assets/icons/valid.svg';
import WrongIcon from 'assets/icons/wrong.svg';

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 5,
    top: 0,
  },
});

const FormIcon = (props) => {
  const { validation, action } = props;

  if (validation === 'valid') {
    return (
      <TouchableOpacity style={styles.button} onPress={action}>
        <ValidIcon />
      </TouchableOpacity>
    );
  } else if (validation === 'wrong') {
    return (
      <TouchableOpacity style={styles.button} onPress={action}>
        <WrongIcon />
      </TouchableOpacity>
    );
  } else {
    return null;
  }
};

export default FormIcon;
