import { Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../../Styles/StyleSheet'
import { Card, Icon } from '@rneui/themed'
import { TouchableOpacity } from 'react-native'

export default class PharmanciesScreen extends Component {
  render() {
    return (
      <View>
        <Card containerStyle={{ borderRadius: 4, marginBottom: 16 }} wrapperStyle={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 0 }}>
          <TextInput style={{ flex: 1 }} placeholderTextColor={"gray"} placeholder="keresés termékekere, kategóriára..." />
          <Icon name="search" size={32} />
        </Card>
        <View style={{ flexDirection: "row", alignItems:"center", justifyContent:"space-between", margin: 8}}>
          <Text style = {{color:"black"}}>10 Termék</Text>
          <TouchableOpacity style={{backgroundColor:"white",borderRadius:16, paddingHorizontal:8}}>
            <Icon name="filter-list" />
          </TouchableOpacity>
        </View>
        <Text style={{ color: colors.primary }}>PharmanciesScreen</Text>
      </View>
    )
  }
}