import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 5,
  },
  question: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    letterSpacing: 0.01,
    lineHeight: 28,
    opacity: 0.8,
    color: '#FFFFFF',
  },
  notes: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    letterSpacing: 0.01,
    lineHeight: 24,
    opacity: 0.6,
    color: '#FFFFFF',
  },
});

const AuthQuestion = (props) => {
  const { question, notes } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      <Text style={styles.notes}>{notes}</Text>
    </View>
  );
};

export default AuthQuestion;
