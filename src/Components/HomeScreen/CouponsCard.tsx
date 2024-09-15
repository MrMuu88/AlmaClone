import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card, Icon, Image } from '@rneui/themed'

import { useNavigation } from '@react-navigation/native'


export default function CouponsCard() {

  const navigation = useNavigation();

  return (
    <>
      <Card containerStyle={{marginBottom:0, backgroundColor:"#E2E2E2", borderTopRightRadius:8,borderTopLeftRadius:8}}>
        <Image style={{ height: 200, width: "auto", resizeMode: "contain" }} source={require('../../assests/couponguy.png')} />
      </Card>
      <Card containerStyle={{marginTop:0, backgroundColor:"#DE486D",borderBottomRightRadius:8,borderBottomLeftRadius:8}}>
        <Text style={{ color:"white", fontWeight:"bold", fontSize:20, marginBottom:16 }}>Ne maradj le az aktuális kuponokról!</Text>
        <Text style={{ color:"white", fontSize:16, textAlign:"justify" }}>Nézd meg az aktuális kupon akciókat és aktiváld, hogy megkapd a kedvezményt! Az aktiválás után, a vásárláskor csak fel kell mutatnod a virtuális vagy plasztik kártyádat.</Text>
        <TouchableOpacity style={{borderColor:"white", borderWidth:2, flexDirection:"row", alignItems:"center", justifyContent:"center", borderRadius:24, marginTop:16, padding:8}} onPress={()=>navigation.navigate("Coupon")}>
          <Text style={{ color:"white",fontSize:20, fontWeight:"bold" }}>Részletek</Text>
          <Icon name="arrow-forward" color="white" />
        </TouchableOpacity>
      </Card>
    </>
  )
}