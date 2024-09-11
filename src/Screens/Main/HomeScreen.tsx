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
        <View style={{ flexDirection: "row", margin:8, gap:8}}>
          <Text style={{ fontSize:20,fontWeight:"bold", color: colors.primary }}>Patikáim</Text>
          <Text style={{ fontSize:20, color: colors.secondary }}>1</Text>
          <Icon name="arrow-forward" color="#57A500"/>
        </View>
        <PharmacyCard />
        <Text style={{ color: colors.primary }}>Hűség kártya tudnivalók</Text>
        <CouponsCard />
        <Text style={{ color: colors.primary }}>Akciós Termékek</Text>
        <SalesCard />
      </ScrollView>
    )
  }
}

