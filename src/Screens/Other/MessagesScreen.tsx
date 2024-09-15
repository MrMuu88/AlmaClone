import { Image, Text, View } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../../Styles/StyleSheet'

export default class MessagesScreen extends Component {
  render() {
    return (
      <View style={{ alignItems:"center", margin:16, gap:16}}>
        <Image source={require('../../assests/NoMessage.png')} style={{width: '90%', aspectRatio: 1, height: undefined,  resizeMode: 'contain'}}/> 
        <Text style={{color:"black", fontWeight:"bold", fontSize:36}}>Nincsenek üzeneteid</Text>
        <Text style={{color:"black", fontSize:20, textAlign:"center"}}>Értesítünk minden új üzenetről a Főoldalon található csengő ikon segítségével.</Text>
      </View>
    )
  }
}