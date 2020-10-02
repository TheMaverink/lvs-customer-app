import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  question: {
    fontFamily: 'DMSans-Regular',
    fontSize: 20,
    letterSpacing: 0.01,
    lineHeight: 28,
    opacity: 0.8,
    color: '#FFFFFF',
    width: '100%',
  },
  notes: {
    fontFamily: 'DMSans-Regular',
    fontSize: 16,
    letterSpacing: 0.01,
    lineHeight: 24,
    opacity: 0.6,
    color: '#FFFFFF',
    marginTop:10
  },
});

const AuthQuestion = (props) => {
  const { question, notes } = props;
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text style={styles.question}>{question}</Text>
        <Text style={styles.notes}>{notes}</Text>
      </View>

     
    </React.Fragment>
  );
};

export default AuthQuestion;
