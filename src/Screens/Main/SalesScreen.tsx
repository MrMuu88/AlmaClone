import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../../Styles/StyleSheet'

export default class SalesScreen extends Component {
  render() {
    return (
      <View>
        <Text style={{color:colors.primary}}>SalesScreen</Text>
      </View>
    )
  }
}