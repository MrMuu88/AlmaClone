import { View, Text } from 'react-native'
import React from 'react'
import { Card } from '@rneui/themed'
import { colors } from '../../../Styles/StyleSheet'

export default function PharmacyCard() {
  return (
    <Card>
      <Text style={{color:colors.primary}}>PharmacyCard</Text>
    </Card>
  )
}