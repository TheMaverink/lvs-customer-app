import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  subserviceContainer: {
    marginBottom: height * 0.045,
  },
  subserviceTitle: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'DMSans-Bold',
  },
  subserviceDescription: {
    color: 'white',
    opacity: 0.6,
    fontSize: 12,
    paddingVertical: 3,
    width: '95%'
  },
});

const SubService = (props) => {

  const {description,index,title} = props

 
  return (
    <View style={styles.subserviceContainer}>
      <Text style={styles.subserviceTitle}>{title}</Text>
      <Text style={styles.subserviceDescription}>{description}</Text>
    </View>
  );
};


export default SubService