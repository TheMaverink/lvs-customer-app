import React from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BaseButton from 'components/BaseButton';

const styles = StyleSheet.create({
  container: {
    width: '60%',
    height: '60%',
    // alignSelf: 'center',
    // alignItems:'stretch',
   alignSelf:'center',
    borderRadius: 5,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 40,
    color: '#FFFFFF',
    lineHeight: 48,
  },
  description: {
    opacity: 0.8,

    fontSize: 14,
    color: '#CDCDCD',
    letterSpacing: -0.01,
    lineHeight: 20,
  },
  button: {},
  icon: {},
});

const { width, height } = Dimensions.get('window');
const adaptedWidth = width * 0.7

const WashCard = (props) => {
  // console.log('wash card props');
  // console.log(props)
  const { title, description, index, scrollX ,selectWashRequest} = props;
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const carWashType = props.title
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });

  const translateXHeading = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.2, 0, -width * 0.2],
  });
  return (
    // <LinearGradient
    //   start={{ x: 0, y: 0 }}
    //   end={{ x: 0, y: 1 }}
    //   colors={['#1A1B1C', '#121213']}
    //   style={styles.container}
    // >
    // <Animated.View style={[styles.container, {transform:[{scale}]}]}>
    <Animated.View style={styles.container}>
      <Animated.Text style={styles.title}>{title}</Animated.Text>
      <Animated.Text style={styles.description}>{description}</Animated.Text>

      <BaseButton
        title="Book now"
        textcolor="#1A1B1C"
        bgColor="#FFD500"
        action={() => selectWashRequest(carWashType)}
      />
    </Animated.View>
    // </LinearGradient>
  );
};

export default WashCard;
