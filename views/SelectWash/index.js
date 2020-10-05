import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  Animated,
  Text,
  View,
  FlatList,
  StatusBar,
  Dimensions
} from 'react-native';
import WashCard from 'components/WashCard';
import WashesContainer from 'containers/Washes';
import { compose, lifecycle } from 'recompose';

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
    overflow:'visible',
    
  },
});

const SelectWashView = (props) => {
  const { washesRequest, washes, selectWashRequest } = props;

  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    washesRequest();
  }, []);

  return (
    <View style={styles.background}>
      <HeaderMessage title={'Select your premium\ncar wash.'} />
      <View style={styles.animWrapper}>
        <Animated.FlatList
          style={{ transform: [{ translateX:-deviceWidth*0.05 }], overflow:'visible',}}
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
      </View>
    </View>
  );
};

export default compose(WashesContainer)(SelectWashView);
