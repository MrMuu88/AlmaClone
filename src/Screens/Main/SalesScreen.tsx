import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../../Styles/StyleSheet'
import { Card } from '@rneui/themed'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Icon } from '@rneui/base'
import ProductCard from '../../Components/ProductCard'

export const SalesScreen = () => {

  const products = require("../../assests/products.json") as Product[];

  return (
    <View>
      <Card containerStyle={{borderRadius:4, marginBottom:16}} wrapperStyle={{flexDirection:"row",alignItems:"center", justifyContent:"space-between", padding:0}}>
        <TextInput style={{flex:1}} placeholderTextColor={"gray"} placeholder="keresés termékekere, kategóriára..." />
        <Icon name="search"  size={32}/>
      </Card>

      <ScrollView>

        <View style={{flexDirection: "row", gap:8, marginHorizontal:16}}>
          <Card containerStyle={{ flex:1, marginHorizontal:0, backgroundColor: "#68C400", }}>
            <Icon style={{alignSelf:'flex-start', marginBottom:8}} name="pill" type="material-community" color="white"/>
            <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"baseline"}}>
            <Text style={{color:"white", fontWeight:"bold",fontSize:24}}>Összes{"\n"}termék</Text>
            <Icon name="arrow-forward" color="white"/>
            </View>
          </Card>
          <Card containerStyle={{ flex:1, marginHorizontal:0, backgroundColor: "#4081BD", }}>
            <Icon style={{alignSelf:'flex-start', marginBottom:8}} name="heart-circle-outline" type="ionicon" color="white"/>
            <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"baseline"}}>
            <Text style={{color:"white", fontWeight:"bold",fontSize:24}}>Kedvenc{"\n"}termékeim</Text>
            <Icon name="arrow-forward" color="white"/>
            </View>
          </Card>
          

        </View>
        <View style={{ flexDirection: "row", alignItems:"center", justifyContent:"space-between", margin: 8}}>
          <Text style = {{color:"black"}}>10 Termék</Text>
          <TouchableOpacity style={{backgroundColor:"white",borderRadius:16, paddingHorizontal:8}}>
            <Icon name="filter-list" />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row", flexWrap:"wrap", padding:8}}> 
        {
          products.map((e,i) => <ProductCard key={i} product={e} />)
        }
        </View>
        <View style={{ height: 200 }} />

      </ScrollView>
    </View>
  )
}
