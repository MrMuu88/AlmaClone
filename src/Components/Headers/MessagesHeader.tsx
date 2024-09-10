import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../Styles/StyleSheet';
import { StackHeaderProps } from '@react-navigation/stack';

export const MessagesHeader = (props : StackHeaderProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> props.navigation.goBack()}>
                <Image style={styles.logo} source={require('../../assests/icons/017-arrow.png')} />
            </TouchableOpacity>
            <View style={{flex:1, justifyContent:"center"}}>
                <Text style={styles.title}>Üzenetek</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flexDirection: "row", alignContent: "center", margin: 8, padding: 8 },
    logo: { width: 32, height: 32, resizeMode: "contain" },
    title: { fontSize: 20, fontWeight: "bold", color: colors.primary, alignSelf: "center" }
});