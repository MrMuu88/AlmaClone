import { View, Text } from 'react-native'
import React from 'react'
import { Card } from '@rneui/themed'
import { colors } from '../../../Styles/StyleSheet'

export default function CouponsCard() {
  return (
    <Card>
      <Text style={{color:colors.primary}}>CouponsCard</Text>
    </Card>
  )
}