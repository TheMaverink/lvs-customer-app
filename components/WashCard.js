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
import * as RootNavigation from '../RootNavigation';
import { LinearGradient } from 'expo-linear-gradient';
import BaseButton from 'components/BaseButton';

import YellowCar from '../assets/images/cars/yellowcar.png';
import BlueCar from '../assets/images/cars/bluecar.png';
import InfoIcon from '../assets/icons/info-icon.png';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const adaptedWidth = deviceWidth * 0.9;

const styles = StyleSheet.create({
  container: {
    position:'relative',
    alignSelf: 'center',
    // transform: [{ translateX: -deviceHeight * 0.025 }],
    //  width:'100%',
    // borderRadius: 30,
    marginTop: '5%',
   backgroundColor:'transparent',
   
  },
  gradientContainer: {
    position:'relative',
    borderRadius: 24,
    height: deviceHeight * 0.58,
    width: adaptedWidth * 0.72,
    marginLeft: adaptedWidth * 0.15,
    marginRight: adaptedWidth * 0.03,
    overflow: 'visible',
    justifyContent: 'center',
    // backgroundColor: 'red',
    // borderWidth:1,
    // borderColor:'red'
  },

  image: {
    // marginTop: '5%',
    position:'absolute',
    top:50,
    width: '100%',
    overflow: 'visible',
    transform: [{ translateX: -deviceHeight * 0.02 }],
  },
  titleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 20,
    width:'100%',
    transform: [{ translateY: -deviceHeight * 0.01 }],
  },

  title: {
    fontSize: 40,
    color: '#FFFFFF',
    lineHeight: 48,
    fontFamily: 'DMSerifDisplay-Regular',
    paddingHorizontal: '5%',
    
  },
  description: {
    opacity: 0.6,
    fontSize: 14,
    color: '#CDCDCD',
    letterSpacing: -0.01,
    lineHeight: 20,
    paddingTop: '3%',
    paddingHorizontal: '5%',
    fontFamily: 'DMSans-Regular',
  },


  iconContainer: {
    width: '100%',
    paddingHorizontal: '5%',
    paddingTop: '10%',
  },
  icon: {
    width: 20,
    height:20
  },
  cornerLeftContainer: {
    position: 'absolute',
    backgroundColor: '#1A1B1C',
    width: 60,
    height: 60,
    bottom: 0,
    left: 0,
  },
  cornerLeft: {
    position: 'absolute',
    backgroundColor: 'black',
    borderBottomLeftRadius: 24,
    width: 60,
    height: 60,
    bottom: 0,
    left: 0,
  },
  cornerRightContainer: {
    position: 'absolute',
    backgroundColor: '#1A1B1C',
    width: 60,
    height: 60,
    bottom: 0,
    right: 0,
  },
  cornerRight: {
    position: 'absolute',
    backgroundColor: 'black',
    borderBottomRightRadius: 24,
    width: 60,
    height: 60,
    right: 0,
  },
  button: {
    position:'absolute',
    bottom:16,
    // marginVertical: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 16,
    width: '87%',
    fontFamily:'DMSans-Bold',
    fontSize: 14,
    backgroundColor: '#FFD500',
    zIndex:3
  },
  buttonText: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 16,
    color: 'black',
  },
});

const { width, height } = Dimensions.get('window');
// const adaptedWidth = width * 0.7;

const WashCard = (props) => {
  const {
    title,
    description,
    index,
    scrollX,
    selectWashRequest,
    subServices,
    duration,
    price,
    imageSource,
  } = props;

  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const cardScale = scrollX.interpolate({
    inputRange,
    outputRange: [0.9, 1, 0.9],
  });

  // const imageScale = scrollX.interpolate({
  //   inputRange,
  //   outputRange: [0.85, 1, 0.85],
  // });

  // const translateXHeading = scrollX.interpolate({
  //   inputRange,
  //   outputRange: [-width * 0.03, 0, width * 0.03],
  // });

  const inputRangeOpacity = [
    (index - 0.3) * width,
    index * width,
    (index + 0.3) * width,
  ];

  const opacity = scrollX.interpolate({
    inputRange: inputRangeOpacity,
    outputRange: [0.95, 1, 0.95],
  });

  //---

  const carWashType = props.title;

  return (
    <Animated.View
      style={[
        styles.container,

        {
          opacity,
          //  transform: [{ translateX: -2000 }],
          transform: [{ scale: cardScale }],
        },
      ]}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0,0.15,1]}
        colors={['transparent', 'transparent','black']}
        style={styles.gradientContainer}
      >
        {index === 1 ? (
          <Animated.Image
            source={BlueCar}
            style={
              // (styles.image,
              // {
              //   transform: [{ scale: imageScale }],
              //   transform: [{ translateX: translateXHeading }],
              // }
              // )
              styles.image
            }
          ></Animated.Image>
        ) : (
          <Animated.Image
            source={YellowCar}
            style={
              // (styles.image,
              // {
              //   transform: [{ scale: imageScale }],
              //   transform: [{ translateX: translateXHeading }],
              // }
              // )
              styles.image
            }
          ></Animated.Image>
        )}

        <View style={styles.titleContainer}>
          <Animated.Text style={[styles.title]}>{title}</Animated.Text>
          <Animated.Text style={styles.description}>
            {description}
          </Animated.Text>
          <View style={styles.iconContainer}>
            <TouchableHighlight
              onPress={() =>
                RootNavigation.navigate('Wash Description', {
                  price: price,
                  title: title,
                  description: description,
                  subServices: subServices,
                })
              }
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

        <View style={styles.cornerLeftContainer}>
            <View style={styles.cornerLeft}></View>
          </View>
          <View style={styles.cornerRightContainer}>
            <View style={styles.cornerRight}></View>
          </View>
      </LinearGradient>
    </Animated.View>
  );
};

export default WashCard;
