import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableHighlight,
  Text,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BaseButton from 'components/BaseButton';

import Car1 from '../assets/images/cars/car1.png';
import InfoIcon from '../assets/icons/info-icon.png';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    margin: deviceWidth * 0.08,
    borderRadius: 30,
    // borderColor: 'red',
    // borderWidth: 5,
    
  },
  gradientContainer: {
    width: deviceWidth * 0.67,
    height: deviceHeight * 0.58,
    alignSelf: 'center',
    margin: 5,
    overflow: 'visible',
    justifyContent: 'space-evenly',
  },

  image: {
    marginTop: '5%',
    width: '110%',
    overflow: 'visible',
    transform: [{ translateX: -deviceHeight * 0.025 }],
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    paddingHorizontal: '10%',
  },

  title: {
    fontSize: 40,
    color: '#FFFFFF',
    lineHeight: 48,
    fontFamily: 'DMSerifDisplay-Regular',
    paddingHorizontal: '10%',
  },
  description: {
    opacity: 0.6,
    fontSize: 14,
    color: '#CDCDCD',
    letterSpacing: -0.01,
    lineHeight: 20,
    paddingTop: '3%',
    paddingHorizontal: '10%',
    fontFamily: 'DMSans-Regular',
  },

  button: {
    marginVertical: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 15,
    width: '85%',
    borderWidth: 2,
    fontSize: 16,
    backgroundColor: '#FFD500',
  },
  buttonText: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 16,
    color: 'black',
  },
  iconContainer: {
    width: '100%',
    paddingHorizontal: '10%',
    paddingTop: '10%',
  },
  icon: {},
});

const { width, height } = Dimensions.get('window');
const adaptedWidth = width * 0.7;

const WashCard = (props) => {
  const { title, description, index, scrollX, selectWashRequest } = props;

  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.7, 1, 0.7],
  });

  const inputRangeOpacity = [
    (index - 0.3) * width,
    index * width,
    (index + 0.3) * width,
  ];

  const translateXHeading = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.2, 0, -width * 0.2],
  });

  const opacity = scrollX.interpolate({
    inputRange: inputRangeOpacity,
    outputRange: [0.6, 1, 0.6],
  });

  //---

  const carWashType = props.title;

  return (
    <Animated.View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['#1A1B1C', 'black']}
        style={styles.gradientContainer}
      >
        <Animated.Image
          source={Car1}
          style={
            (styles.image,
            {
              transform: [{ scale }],
            })
          }
        ></Animated.Image>

        <View style={styles.titleContainer}>
          <Animated.Text style={styles.title}>{title}</Animated.Text>
          <Animated.Text style={styles.description}>
            {description}
          </Animated.Text>
          <View style={styles.iconContainer}>
            <TouchableHighlight
              onPress={() => console.log('go to description')}
            >
              <Image style={styles.icon} source={InfoIcon}></Image>
            </TouchableHighlight>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => selectWashRequest(carWashType)}
        >
          <Text style={styles.buttonText}>BOOK NOW</Text>
        </TouchableOpacity>
      </LinearGradient>
    </Animated.View>
  );
};

export default WashCard;
