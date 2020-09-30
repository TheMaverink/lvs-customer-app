import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Dimensions,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
const { width, height } = Dimensions.get('window');

import { compose, lifecycle } from 'recompose';

import ServicesContainer from 'containers/Services/';

import SubService from './components/SubService';

import CarImg from '../../assets/images/cars/car1.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1B1C',
  },
  scrollViewContainer: {
    // backgroundColor: 'red',
    // justifyContent:'center'
  },
  titleContainer: {
    height: height * 0.2,
    backgroundColor: 'white',

    justifyContent: 'center',
    paddingLeft: width * 0.05,
  },
  serviceTitle: {
    fontFamily: 'DMSerifDisplay-Regular',
    fontSize: 40,
  },
  serviceDescription: {
    fontFamily: 'DMSans-Regular',
    opacity: 0.6,
    fontSize: 16,
  },

  listContainer: {
    // backgroundColor: 'red',
    minHeight: height * 0.8,
    position: 'relative',
    borderRadius: 25,
    width: width * 1.02,
    transform: [{ translateX: -width * 0.01 }],
  },
  imageContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateY: '-40%' }],
  },
  cornerLeftContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 60,
    height: 60,
    top: 0,
    left: 0,
  },
  cornerLeft: {
    position: 'absolute',
    backgroundColor: '#1A1B1C',
    borderTopLeftRadius: 60,
    width: 60,
    height: 60,
    top: 0,
    left: 0,
  },
  cornerRightContainer: {
    position: 'absolute',
    backgroundColor: '#1A1B1C',
    width: 60,
    height: 60,
    top: -60,
    right: 0,
  },
  cornerRight: {
    position: 'absolute',
    backgroundColor: 'white',
    borderBottomRightRadius: 60,
    width: 60,
    height: 60,
    right: 0,
  },

  image: {},
  contentContainer: {
    marginTop: height * 0.075,
    paddingLeft: width * 0.05,
  },
  price: {
    color: '#FED400',
    fontSize: 16,
    fontFamily: 'DMSans-Bold',
    marginBottom: height * 0.045,
  },
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
  },
});

const WashDescription = (props) => {
  const { subServices } = props.route.params;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        {Platform.OS === 'ios' && (
          <View
            style={{
              backgroundColor: 'white',
              height: height * 0.5,
              position: 'absolute',
              top: -height * 0.5,
              left: 0,
              right: 0,
            }}
          />
        )}
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <View style={styles.titleContainer}>
          <Text style={styles.serviceTitle}>Signature Wash</Text>
          <Text style={styles.serviceDescription}>Interior & Exterior</Text>
        </View>
        <View style={styles.listContainer}>
          <View style={styles.cornerLeftContainer}>
            <View style={styles.cornerLeft}></View>
          </View>
          <View style={styles.cornerRightContainer}>
            <View style={styles.cornerRight}></View>
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={CarImg}></Image>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.price}>£100</Text>

            <FlatList
              keyExtractor={(item) => item.title}
              data={subServices}
              renderItem={({ item, index }) => {
                return (
                  <SubService
                    title={item.title}
                    description={item.description}
                    index={index}
                  />
                );
              }}
            ></FlatList>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default compose(ServicesContainer)(WashDescription);
