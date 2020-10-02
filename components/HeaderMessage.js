import React from 'react';
import { Text, View, StyleSheet ,Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container:{
    width:'100%',
    position:'absolute',
    top:0,
    left:0

  },
  text: {
    paddingTop:deviceHeight * 0.03,
    paddingLeft:deviceWidth * 0.05,
    color: 'white',
    fontSize: 24,
    fontFamily: 'DMSans-Regular',
    width: '100%',
    letterSpacing: -0.33,
    lineHeight: 32,
  },
});

const HeaderMessage = (props) => {
  const { title } = props;
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default HeaderMessage;
