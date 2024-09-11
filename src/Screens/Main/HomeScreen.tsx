import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../../Styles/StyleSheet'
import LoyaltyCard from '../../Components/Headers/HomeScreen/LoyaltyCard'
import PharmacyCard from '../../Components/Headers/HomeScreen/PharmacyCard'
import CouponsCard from '../../Components/Headers/HomeScreen/CouponsCard'
import SalesCard from '../../Components/Headers/HomeScreen/SalesCard'
import { Icon } from '@rneui/themed'


export default class HomeScreen extends Component {
  render() {
    return (
      <ScrollView>
        <LoyaltyCard />
        <View style={{height:8}}/>
        <View style={{ flexDirection: "row", margin:8, gap:8}}>
          <Text style={{ fontSize:20,fontWeight:"bold", color: colors.primary }}>Patikáim</Text>
          <Text style={{ fontSize:20, color: colors.secondary }}>1</Text>
          <Icon name="arrow-forward" color="#57A500"/>
        </View>
        <PharmacyCard />
        <View style={{height:8}}/>
        <View style={{ flexDirection: "row", margin:8, alignItems:"center", justifyContent:"center"}}>
        <Icon name="information-circle-outline" type="ionicon" color="#57A500" size={32} />
          <Text style={{ fontSize:20,fontWeight:"bold", color:"#57A500"}}>Hűség kártya tudnivalók</Text>
        </View>
        <CouponsCard />
        <Text style={{ color: colors.primary }}>Akciós Termékek</Text>
        <SalesCard />
      </ScrollView>
    )
  }
}

