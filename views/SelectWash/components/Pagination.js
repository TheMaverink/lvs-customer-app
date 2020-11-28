import React from 'react';
import { StyleSheet, View, Dimensions, Animated } from 'react-native';

const { width, height } = Dimensions.get('window');

const DOT_SIZE = 15;

const styles = StyleSheet.create({
  pagination: {
    position: 'absolute',
    right: '50%',
    transform: [{ translateX: '50%' }],
    bottom: 40,
    flexDirection: 'row',
    height: DOT_SIZE,
    // backgroundColor:'green'
  },
  paginationDot: {
    width: DOT_SIZE * 0.7,
    height: DOT_SIZE * 0.7,
    borderRadius: DOT_SIZE * 0.35,
  },
  paginationDotContainer: {
    width: DOT_SIZE,
    // alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
  },
  paginationIndicator: {
    width: DOT_SIZE * 1.1,
    height: DOT_SIZE * 1.1,
    borderRadius: DOT_SIZE / 2,
    // borderWidth: 2,
    // borderColor: '#ddd',
    backgroundColor: 'white',
  },
});

const Pagination = (props) => {
  const { scrollX, data } = props;
  const inputRange = [-width, 0, width];
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [-DOT_SIZE * 1.3, 0, DOT_SIZE * 1.3 + 8],
  });
  return (
    <View style={[styles.pagination]}>
      <Animated.View
        style={[
          styles.paginationIndicator,
          {
            position: 'absolute',
            // backgroundColor: 'red',
            transform: [{ translateX }],
          },
        ]}
      />
      {data
        ? data.map((item) => {
            return (
              <View key={item._id} style={styles.paginationDotContainer}>
                <View
                  style={[
                    styles.paginationDot,
                    { backgroundColor: 'white', opacity: 0.2 },
                  ]}
                />
              </View>
            );
          })
        : null}
    </View>
  );
};

export default Pagination;
