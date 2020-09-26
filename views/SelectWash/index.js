import React, { useEffect, useRef } from 'react';
import { StyleSheet, Animated, Text, View, FlatList,StatusBar } from 'react-native';
import WashCard from 'components/WashCard';
import WashesContainer from 'containers/Washes';
import { compose, lifecycle } from 'recompose';
import { useFocusEffect } from '@react-navigation/native';
import HeaderMessage from "../../components/HeaderMessage"
const styles = StyleSheet.create({
  background: {
    flex:1,
    backgroundColor: '#1A1B1C',
 
  
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
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <HeaderMessage title={"Select your premium car wash."}/>
    

      <Animated.FlatList
        keyExtractor={(item) => item.title}
        data={washes}
       
        renderItem={({ item, index }) => (
          <WashCard
            title={item.title}
            description={item.description}
            index={index}
            scrollX={scrollX}
            selectWashRequest={selectWashRequest}
            
          />
        
          
        )}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      />
    </View>
  );
};

export default compose(WashesContainer)(SelectWashView);
