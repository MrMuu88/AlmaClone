import { View, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { StackHeaderProps } from '@react-navigation/stack';
import { Icon } from '@rneui/themed';



export default function MainHeader(props : StackHeaderProps) {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=> props.navigation.navigate("Messages")}>
          <Icon name="bell" type="material-community" color="#57A500" size={36} />
        </TouchableOpacity>

        <View>
        <Image source={require('../../assests/icons/Alma+logo_small.png')} style={styles.logo}/>
        </View>

        
        <TouchableOpacity onPress={()=> props.navigation.navigate("Menu")}>
          <Icon name="menu" size={36}/>
        </TouchableOpacity>
      </View>
  )
}


const styles = StyleSheet.create({
  container:{flexDirection:"row", justifyContent:"space-between",  margin:8, padding:8},
  logo:{width:32, height:32, resizeMode:"contain"}
});