import React from 'react'

import {View,StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container:{
    width:38,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    position:'absolute',
    bottom:-30,
    left:'50%',
   transform: [{ translateX: '-20%'}],
   
  },
  active:{
    width: 8,
    height: 8,
    borderRadius: 8/2,
    backgroundColor:'white',
    borderWidth:5,
    borderColor:'white'

  },
  inactive:{
    width: 8,
    height: 8,
    borderRadius: 8/2,
    backgroundColor:'white',
    opacity:.4

  }
})

export default function Indicator(props) {

  const {index} = props
  return (
    <View style={styles.container}>
      <View style={styles.active} ></View>
      <View style={index >0 ? styles.active : styles.inactive} ></View>
      <View style={index >1 ? styles.active : styles.inactive}></View>
    </View>
   
  )
}
