import { View, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { StackHeaderProps } from '@react-navigation/stack';



export default function MainHeader(props : StackHeaderProps) {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=> props.navigation.navigate("Messages")}>
          <Image source={require('../../assests/icons/009-bell.png')} style={styles.logo}/>
        </TouchableOpacity>

        <View>
        <Image source={require('../../assests/icons/Alma+logo_small.png')} style={styles.logo}/>
        </View>

        
        <TouchableOpacity onPress={()=> props.navigation.navigate("Menu")}>
          <Image source={require('../../assests/icons/019-menu.png')} style={styles.logo}/>
        </TouchableOpacity>
      </View>
  )
}


const styles = StyleSheet.create({
  container:{flexDirection:"row", justifyContent:"space-between",  margin:8, padding:8},
  logo:{width:32, height:32, resizeMode:"contain"}
});