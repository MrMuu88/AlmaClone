import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card, Icon } from '@rneui/themed'

export default function LoyaltyCard() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [lightOn, setLightOn] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const toggleLight = () => setLightOn(!lightOn);

    return (
        <View>
            <Card containerStyle={styles.cardContainer} wrapperStyle={styles.cardWrapper}>
                <View style={{ flexDirection: "row", position: "relative", width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={styles.title}>Hűségkártyám</Text>
                    <TouchableOpacity style={{ position: 'absolute', right: 0 }} onPress={toggle}>
                        <Icon color="white" size={36} name={isOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"} />
                    </TouchableOpacity>
                </View>
                {isOpen &&
                <>
                    <View style={{ alignItems: "center", position:"relative" }}>
                        <Text style={styles.subtitle}>123456-123456-123456</Text>
                        <View style={{ height: 16 }} />
                        <Image style={{ width: 160, height: 160 }} source={require('../../../assests/QrCode.png')} />
                    </View>
                    <TouchableOpacity style={{backgroundColor:"black", padding:8, borderRadius:8, position:"absolute",bottom:0,right:0}} onPress={()=> toggleLight()}>
                        <Icon name={lightOn?"flashlight-on":"flashlight-off"} color="white"/>
                    </TouchableOpacity>
                </>
                }
            </Card>
            {isOpen &&
                <TouchableOpacity style={{backgroundColor:"black", flexDirection:"row", alignSelf:"center", borderRadius:10, padding:8, margin:8}}>
                    <Image source={require("../../../assests/GoogleWallet.png")} style={{ width: 48, height: 48 }} />
                    <View>
                        <Text style={{fontSize:16,color:"white"}}>Hozzáadás a következőhöz</Text>
                        <Text style={{fontSize:24,color:"white"}}>Google Wallet</Text>
                    </View>
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: { backgroundColor: "#57A500", borderRadius: 10},
    cardWrapper: { alignItems: "center" },
    title: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        flex: 1,
        textAlign: "center"
    },
    subtitle: {
        margin: 8,
        color: "white",
        fontSize: 20,
    }
})