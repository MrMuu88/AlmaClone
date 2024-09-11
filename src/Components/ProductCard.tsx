import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Card, Icon, Image, Text } from '@rneui/themed'
import { colors } from '../Styles/StyleSheet';

type ProductCardProps={
    product:Product;
}

export default function ProductCard(props:ProductCardProps) {
  return (
    <Card>
        <Icon name="heart"/>
        {/*
        <Image source={require("../assests/products/" +props.product.image)}/>
        */}
        <View style={styles.divider} />
        <Text>{props.product.name}</Text>
        <Text>Hűségkártyával</Text>
        <Text>{props.product.salePrice}</Text>
        <Text>{props.product.unitPrice}</Text>
        <Text>{props.product.discount}</Text>
        <View style={styles.divider}/>
        <Text>Hűségkártya nélkül</Text>
        <Text>{props.product.fullPrice}</Text>
    </Card>
  )
}

const styles = StyleSheet.create({
   divider: { width: "100%", height: 1, margin: 16, backgroundColor: colors.secondary},
});