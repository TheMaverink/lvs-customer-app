import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Dimensions} from "react-native"

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const BaseButton = (props)=>{

 const {title,bgColor,outlineColor,textColor,action} = props
  const styles = StyleSheet.create({
    button:{
      marginVertical:5,
      alignSelf:'center',
      justifyContent:'center',
      height:45,
      borderRadius:15,
      width:deviceWidth * 0.9 ,
      borderWidth:2,
      borderColor:outlineColor,
      fontSize:16,
      backgroundColor:bgColor

    },
    text:{
      alignSelf:'center',
      justifyContent:'center',
      fontSize:16,
      color:textColor,
    }
  })
  return <TouchableOpacity style={styles.button} onPress={action}>
    <Text style={styles.text}>{title.toUpperCase()}</Text>
  </TouchableOpacity>
}

export default BaseButton