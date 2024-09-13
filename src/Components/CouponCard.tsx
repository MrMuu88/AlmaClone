import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Card, Icon, Image } from '@rneui/themed';

type couponcardProps ={
    coupon: Coupon
}

export default function CouponCard( props:couponcardProps) {

    const imageMap:{[key:string]:any}={
        "1":require("../assests/images/products/1.jpg"),
        "2":require("../assests/images/products/2.png"),
        "3":require("../assests/images/products/3.jpg"),
        "4":require("../assests/images/products/4.jpg"),
        "5":require("../assests/images/products/5.jpg"),
        "6":require("../assests/images/products/6.png"),
        "7":require("../assests/images/products/7.png"),
        "8":require("../assests/images/products/8.png"),
        "9":require("../assests/images/products/9.jpg"),
        "10":require("../assests/images/products/10.jpg"),
    };

    const [active,setActive] = useState(false);

    return (

        <View style={{ gap: 0 }}>
            <Card containerStyle={{ borderWidth: 0, borderTopLeftRadius: 8, borderTopRightRadius: 8, marginBottom: 0, backgroundColor: props.coupon.primaryColor }} >
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <View style={{width:"50%"}}>
                        <Text style={{color:"white"}}>{props.coupon.salePeriod}</Text>
                        <Text style={{ height:"auto", color:"white", fontWeight:"bold", fontSize:24}}>{props.coupon.name}</Text>
                    </View>
                    <View style={{width:"50%"}}>
                        <Image source={imageMap[props.coupon.image]} style={{width:"100%", height:160, resizeMode:"contain"}}/>
                    </View>
                </View>
            </Card>
            <Card containerStyle={{ borderWidth: 0, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, marginTop: 0,padding:0, backgroundColor: props.coupon.secondaryColor }} wrapperStyle={{padding:0}}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 8, alignItems: "center" }}>
                    <View>
                        <Text style={{fontWeight:"bold", fontSize:40, color:"black"}}>{props.coupon.discount}</Text>
                        <Text style={{color:"black"}}>{props.coupon.usage}</Text>
                    </View>
                    <TouchableOpacity onPress={()=> setActive(!active)} style={{backgroundColor:(active ? "#6e5237":"#468400"), borderRadius:20, padding:8, paddingHorizontal:20, alignItems:"center"}}>
                        <Text style={{fontSize:20, fontWeight:"bold", color:"white"}}>{active?"Már Aktív":"Aktiválom"}</Text>
                    </TouchableOpacity>
                </View>
            </Card>
        </View>
    )
}