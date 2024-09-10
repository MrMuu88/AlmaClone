import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../../Styles/StyleSheet'
import LoyaltyCard from '../../Components/Headers/HomeScreen/LoyaltyCard'
import PharmacyCard from '../../Components/Headers/HomeScreen/PharmacyCard'
import CouponsCard from '../../Components/Headers/HomeScreen/CouponsCard'
import SalesCard from '../../Components/Headers/HomeScreen/SalesCard'


export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <LoyaltyCard/>
        <Text style={{color:colors.primary}}>Patikáim</Text>
        <PharmacyCard/>
        <Text style={{color:colors.primary}}>Hűség kártya tudnivalók</Text>
        <CouponsCard/>
        <Text style={{color:colors.primary}}>Akciós Termékek</Text>
        <SalesCard/>
      </View>
    )
  }
}

