import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Dimensions} from "react-native"

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const BaseButton = (props)=>{

 const {title,bgColor,outlineColor,textColor,action,margin,width } = props
  const styles = StyleSheet.create({
    button:{
      // marginVertical:4,
      alignSelf:'center',
      justifyContent:'center',
      height:48,
      borderRadius:16,
      width: width ? width : deviceWidth * 0.9 ,
      borderWidth:1.3,
      borderColor:outlineColor,
      fontSize:16,
      backgroundColor:bgColor,
      margin:margin

    },
    text:{
      alignSelf:'center',
      justifyContent:'center',
      fontSize:16,
      color:textColor,
      fontFamily:'DMSans-Bold'
    }
  })
  return <TouchableOpacity style={styles.button} onPress={action}>
    <Text style={styles.text}>{title.toUpperCase()}</Text>
  </TouchableOpacity>
}

export default BaseButton