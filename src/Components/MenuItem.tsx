import { View, Text } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'

export class MenuData{
    iconName!:string;
    iconType:string = "material";
    text!:string;
    secondaryText!:string;
    hasIcon:boolean = true;
}
interface MenuitemProp{
    menuData:MenuData;
}

export default function MenuItem(props:MenuitemProp) {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 8, margin: 16 }}>
            <View style={{flexDirection:"row", alignItems:"center", gap:8}}>
                {props.menuData.hasIcon ?
                    <Icon name={props.menuData.iconName} type={props.menuData.iconType} size={24} color="white" /> : <></>
                }
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>{props.menuData.text}</Text>
                <Text>{props.menuData.secondaryText}</Text>
            </View>
            <Icon name="arrow-forward" size={24} color="#57A500" />
        </View>
    )
}