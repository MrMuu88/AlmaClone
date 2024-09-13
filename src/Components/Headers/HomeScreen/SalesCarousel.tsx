import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Card } from '@rneui/themed'
import { colors } from '../../../Styles/StyleSheet'
import ProductCard from '../../ProductCard'

export default function SalesCarousel() {
  const product = require("../../../assests/products.json") as Product[];

  useEffect(()=>{
    product.forEach(e => console.log(e.image));
  },[]);

  return (
    <View style={{flexDirection:"row"}}>
      <ProductCard product={product[0]}/>
      <ProductCard product={product[1]}/>
    </View>
  )
}