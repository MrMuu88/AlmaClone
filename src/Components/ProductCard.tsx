import { View, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, Icon, Image, Text } from '@rneui/themed'
import { colors } from '../Styles/StyleSheet';

type ProductCardProps={
    product:Product;
}

export default function ProductCard(props:ProductCardProps) {

    const [isFavorited,setIsfavorited] = useState(false);

    //ez undorító :D:D
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

  return (
    <Card containerStyle={{flex:1, minWidth:"40%", margin:4, borderRadius:4}} wrapperStyle={{position:"relative"}}>
        <Image style={{height:160, width:"auto", resizeMode:"contain",}} source={imageMap[props.product.id]}/>
        <View style={{position:"absolute", top:0, right:0}}>
            <Icon name={isFavorited?"heart":"heart-outlined"} type="entypo" onPress={()=> setIsfavorited(!isFavorited)} />
        </View>
        
        <View style={styles.divider} />
        <Text style={{fontWeight:"bold", fontSize:16, margin: 8, height:64}}>{props.product.name}</Text>
        <Text style={{color:"#57A500", fontWeight:"bold"}}>Hűségkártyával</Text>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{fontWeight:"bold",fontSize:32}}>{props.product.salePrice}</Text>
            <Text style={{fontWeight:"bold", color:"#57A500", fontSize:32, transform:[{rotate:"-45deg"}]}}>{props.product.discount}</Text>
        </View>
        <Text>{props.product.unitPrice}</Text>
        <View style={styles.divider}/>
        <Text style={{color:"#FA9015", fontWeight:"bold"}}>Hűségkártya nélkül</Text>
        <Text style={{fontWeight:"bold",fontSize:32}}>{props.product.fullPrice}</Text>
    </Card>
  )
}

const styles = StyleSheet.create({
   divider: { width: "90%", height: 1, margin: 16, backgroundColor: colors.secondary},
});