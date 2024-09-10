import { View, Text } from 'react-native'
import React from 'react'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { colors } from '../Styles/StyleSheet'



export default function TabHeaderComponent(props : BottomTabHeaderProps) {
  return (
    <View>
      <Text style={{color:colors.primary}}>TabHeaderComponent</Text>
    </View>
  )
}