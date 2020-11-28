import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  Animated,
  Text,
  View,
  FlatList,
  StatusBar,
  Dimensions,
} from 'react-native';
import WashCard from './components/WashCard';
import WashesContainer from 'containers/Washes';
import BookingsContainer from 'containers/Bookings';
import CalendarContainer from 'containers/Calendar';
import { compose, lifecycle } from 'recompose';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { StatusColorContext } from 'components/AppView';
import Pagination from './components/Pagination';
import { BlurView } from 'expo-blur';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

import HeaderMessage from '../../components/HeaderMessage';
const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: '100%',
    backgroundColor: '#1A1B1C',
  },
  animWrapper: {
    width: '90%',
    overflow: 'visible',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.1,
  },
});

const SelectWashView = (props) => {
  const {
    washesRequest,
    washes,
    selectWashRequest,
    getBookingsRequest,
    getTimesRequest,
    isBookingsLoading,
    isWashesLoading,
  } = props;

  const scrollX = useRef(new Animated.Value(0)).current;

  const colorContext = React.useContext(StatusColorContext);

  useEffect(() => {
    washesRequest();
    getTimesRequest();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      colorContext.changeAppViewColour('#1a1b1c');
      console.log(colorContext);

      getBookingsRequest();
    }, [])
  );

  const isFocused = useIsFocused();

  return (
    <View style={styles.background}>
      {isFocused ? <StatusBar barStyle="light-content" /> : null}
      <HeaderMessage title={'Select your premium\ncar wash.'} />
      <View style={styles.animWrapper}>
        <Animated.FlatList
          style={{
            transform: [{ translateX: -deviceWidth * 0.05 }],
            overflow: 'visible',
          }}
          // style={{ overflow:'visible'}}
          keyExtractor={(item) => item.title}
          data={washes}
          renderItem={({ item, index }) => {
            return (
              <WashCard
                duration={item.duration}
                price={item.price}
                title={item.title}
                description={item.description}
                index={index}
                scrollX={scrollX}
                selectWashRequest={selectWashRequest}
                subServices={item.subServices}
              />
            );
          }}
          // pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
        />

        <Pagination scrollX={scrollX} data={washes} />
      </View>
      {isBookingsLoading === true || isWashesLoading === true ? (
        <BlurView style={styles.absolute} intensity={60} tint="dark"></BlurView>
      ) : null}
    </View>
  );
};

export default compose(
  WashesContainer,
  CalendarContainer,
  BookingsContainer
)(SelectWashView);
