import React, { useEffect, useRef } from 'react';
import { StyleSheet, Animated, Text, View, FlatList } from 'react-native';
import HeaderText from 'components/HeaderText';
import WashCard from 'components/WashCard';
import WashesContainer from 'containers/Washes';
import { compose, lifecycle } from 'recompose';
import { useFocusEffect } from '@react-navigation/native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#1A1B1C',
   
    // alignSelf:'end',
    // alignItems:'flex-end',
    flex: 1,
  },
});

const SelectWashView = (props) => {
  const { washesRequest, washes, selectWashRequest } = props;
console.log(props)
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    washesRequest();
  }, []);

  // const renderItem = (wash) => {
  //   return (
  //     <WashCard title={wash.item.title} description={wash.item.description} />
  //   );
  // };

  return (
    <View style={styles.background}>
      <HeaderText>Select yooudrr prefemmrum wash.</HeaderText>

      <FlatList
        keyExtractor={(item) => item.title}
        data={washes}
        // renderItem={renderItem}
        renderItem={({ item, index }) => (
          <WashCard
            title={item.title}
            description={item.description}
            index={index}
            scrollX={scrollX}
            selectWashRequest={selectWashRequest}
          />
        
          
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        // onScroll={Animated.event(
        //   [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        //   { useNativeDriver: true }
        // )}
        scrollEventThrottle={16}
      />
    </View>
  );
};

export default compose(WashesContainer)(SelectWashView);
