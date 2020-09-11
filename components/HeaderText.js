import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS } from 'consts';

const styles = StyleSheet.create({
  container: {},
  text: {
    color: COLORS.MID_GRAY,
    fontSize: 24,
    letterSpacing: -0.33,
    lineHeight: 32,
    opacity: 0.95,
  },
});

const HeaderText = ({ children }) => {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default HeaderText;
