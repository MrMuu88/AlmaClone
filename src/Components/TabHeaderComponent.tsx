import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'



export default function TabHeaderComponent(props : BottomTabHeaderProps) {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.logoContainer} onPress={()=> Alert.alert("navigationg to Messages")}>
          <Image source={require('../assests/icons/009-bell.png')} style={styles.logo}/>
        </TouchableOpacity>

        <View style={styles.logoContainer}>
        <Image source={require('../assests/icons/Alma+logo_small.png')} style={styles.logo}/>
        </View>

        
        <TouchableOpacity style={styles.logoContainer} onPress={()=> Alert.alert("navigationg to Messages")}>
          <Image source={require('../assests/icons/019-menu.png')} style={styles.logo}/>
        </TouchableOpacity>
      </View>
  )
}


const styles = StyleSheet.create({
  container:{flexDirection:"row", justifyContent:"space-between", width:"100%", margin:8, padding:8},
  logoContainer:{margin:16},
  logo:{width:32, height:32, resizeMode:"contain"}
});