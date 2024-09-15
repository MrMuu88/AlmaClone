import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../../Styles/StyleSheet'
import MenuItem, { MenuData } from '../../Components/MenuItem'

export const MenuScreen = ()=> {
  const menuitems: MenuData[] = [
    {iconName:"user-circle-o", iconType:"font-awesome", text:"Fiókom", secondaryText:"", hasIcon:true},
    {iconName:"hand-coin-outline", iconType:"material-community", text:"Hűségpontjaim", secondaryText:"", hasIcon:true},
    {iconName:"heart-plus-outline", iconType:"material-community", text:"Kedvenc termékeim", secondaryText:"", hasIcon:true},
    {iconName:"store", iconType:"material-community", text:"Kedvenc patikáim", secondaryText:"", hasIcon:true},
    {iconName:"bell-outline", iconType:"material-community", text:"Üzenetek", secondaryText:"", hasIcon:true},
    {iconName:"add-box", iconType:"materialicons", text:"Termékek", secondaryText:"", hasIcon:true},
    {iconName:"avatar", iconType:"materialicons", text:"jogi Tudnivalók", secondaryText:"", hasIcon:false}
  ]
  return (
    <View style={{backgroundColor:"#282828",flex:1, justifyContent:"space-between"}}>
      <View>
      {menuitems.map(e=> <MenuItem menuData={e}/>)}
      </View>
      <View style={{margin:16}}>
        <Text style={{ textAlign:"center"}}>Készítette: Simon Tamás</Text>
        <Text style={{ textAlign:"center"}}>minden jog fenntartva: Infomix Kft. 2024</Text>
        <Text style={{ textAlign:"center"}}>0.0.1</Text>
      </View>
    </View>
  )
}