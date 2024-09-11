import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card, Icon } from '@rneui/themed'

export default function LoyaltyCard() {
    const [isOpen, setIsOpen] = React.useState(true);
    const [lightOn, setLightOn] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const toggleLight = () => setLightOn(!lightOn);

    return (
        <View>
            <Card containerStyle={styles.cardContainer} wrapperStyle={styles.cardWrapper}>
                <View style={styles.cardHeader}>
                    <Text style={styles.title}>Hűségkártyám</Text>
                    <TouchableOpacity style={styles.toggleButton} onPress={toggle}>
                        <Icon color="white" size={36} name={isOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"} />
                    </TouchableOpacity>
                </View>
                {isOpen &&
                <>
                    <View style={styles.qrCodeContainer}>
                        <Text style={styles.subtitle}>123456-123456-123456</Text>
                        <View style={{ height: 16 }} />
                        <Image style={styles.qrCode} source={require('../../../assests/QrCode.png')} />
                    </View>
                    <TouchableOpacity style={styles.lightButton} onPress={()=> toggleLight()}>
                        <Icon name={lightOn?"flashlight-on":"flashlight-off"} color="white"/>
                    </TouchableOpacity>
                </>
                }
            </Card>
            {isOpen &&
                <TouchableOpacity style={styles.walletButton}>
                    <Image source={require("../../../assests/GoogleWallet.png")} style={styles.walletIcon} />
                    <View>
                        <Text style={styles.walletText}>Hozzáadás a következőhöz</Text>
                        <Text style={styles.walletHeaderText}>Google Wallet</Text>
                    </View>
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: { backgroundColor: "#57A500", borderRadius: 8},
    cardWrapper: { alignItems: "center" },
    cardHeader: { flexDirection: "row", position: "relative", width: "100%", justifyContent: "center", alignItems: "center" },
    title: { color: "white", fontSize: 16, fontWeight: "bold", flex: 1, textAlign: "center" },
    subtitle: { margin: 8, color: "white", fontSize: 20 },
    qrCodeContainer: { alignItems: "center", position:"relative" },
    qrCode: { width: 128, height: 128 },
    lightButton: {backgroundColor:"black", padding:8, borderRadius:8, position:"absolute",bottom:0,right:0},
    walletButton: {backgroundColor:"black", flexDirection:"row", alignSelf:"center", borderRadius:8, padding:8, margin:8},
    walletIcon: { width: 48, height: 48 },
    walletText: {fontSize:16,color:"white"},
    walletHeaderText: {fontSize:24,color:"white"},
    toggleButton: { position: 'absolute', right: 0 },
})
