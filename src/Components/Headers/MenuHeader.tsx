import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../Styles/StyleSheet';
import { StackHeaderProps } from '@react-navigation/stack';
import { Icon } from '@rneui/themed';


export const MenuHeader = (props: StackHeaderProps) => {
    return (
        <View style={styles.container}>
            <View style={{flex:1, alignItems:"center"}}>
                <Image source={require('../../assests/icons/Alma+logo_small.png')} style={styles.logo} />
            </View>
            <TouchableOpacity style={{ justifyContent: "center"}} onPress={() => props.navigation.goBack()}>
                <Icon name="close" size={36} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flexDirection: "row", alignContent: "center", margin: 8, padding: 8 },
    logo: { width: 32, height: 32, resizeMode: "contain" },
    close: { width: 16, height: 16, resizeMode: "contain"},
    title: { fontSize: 20, fontWeight: "bold", color: colors.primary, alignSelf: "center" }
});