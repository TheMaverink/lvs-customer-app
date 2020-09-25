import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from "react-native"



const BaseButton = (props)=>{

 const {title,bgColor,outlineColor,textColor,action} = props
  const styles = StyleSheet.create({
    button:{
      marginVertical:5,
      alignSelf:'center',
      justifyContent:'center',
      height:50,
      borderRadius:15,
      width:'90%',
      borderWidth:3,
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