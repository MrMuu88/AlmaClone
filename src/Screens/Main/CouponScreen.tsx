import { Switch, Text, View } from 'react-native'
import React, { Component, useState } from 'react'
import { colors } from '../../Styles/StyleSheet'
import { ScrollView } from 'react-native-gesture-handler'
import CouponCard from '../../Components/CouponCard'



export const CouponScreen = () => {

  const coupons = require("../../assests/coupons.json") as Coupon[];

  const [checked, setChecked] = useState(false);

  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", margin: 8, padding: 8 }}>
        <Text style={{ color: colors.primary, fontWeight: "bold" }}>5 Kupon</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: colors.primary }}>A Kedvenc Patikámban</Text>
          <Switch trackColor={{false:colors.secondary}} value={checked} onValueChange={setChecked}  />
        </View>

      </View>
      <ScrollView>
        { coupons.map((coupon,i) => <CouponCard key={i} coupon={coupon} />)}
        <View style={{height:200}}/>
      </ScrollView>
    </View>
  )
}
