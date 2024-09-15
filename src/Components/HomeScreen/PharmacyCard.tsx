import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Card, Icon } from '@rneui/themed'
import { colors } from '../../Styles/StyleSheet'


export default function PharmacyCard() {
  return (

    <Card containerStyle={styles.cardContainer} wrapperStyle={{ alignItems: "center" }}>
      <Card containerStyle={{ width: "100%", backgroundColor: "#ECE5ED", margin: 4, borderRadius: 8, padding: 8 }} wrapperStyle={{ flexDirection: "row", alignItems: "center" }}>
        <Icon name="information-circle" type="ionicon" color="#9034A6" size={32} />
        <Text style={[styles.p, { fontWeight: "bold" }]}>594 pontod lejár. Váltsd be Október 30 előtt!</Text>
      </Card>
      <View style={{ flexDirection: "row", alignItems: "center", margin: 16 }}>
        <Icon name="dot-fill" type="octicon" color="#FA9015" size={24} />
        <Text style={styles.p}>HAMAROSAN ZÁR: 20:00</Text>
      </View>
      <Text style={styles.h1}>Szentháromság Gyógyszertár Fiók Gyógyszertára</Text>
      <Text style={styles.h2}>Hangács, Rákóczi út 34/A</Text>
      <View style={styles.divider} />
      <Text style={styles.h2}>Hűségpontjaim a patikában</Text>
      <View style={{ position: "relative", width: "100%", margin: 16 }}>
        <Text style={styles.h1}>2834 pont</Text>
        <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
          <Icon name="refresh" color="#57A500" />
        </View>
      </View>
      <View style={styles.divider} />
      <Text style={styles.h2}>Hűségkártyával elérhető Kedvezményeim ebben a patikában</Text>
      <View style={{flexDirection:"row", margin:8}}>
        <Card containerStyle={{backgroundColor:"#E9F0FB",  width: "50%", margin: 4, borderRadius: 8, padding: 16 }}>
          <Text style={styles.h1}>5 pont</Text>
          <Text style={[styles.h2, { fontWeight: "bold" }]}>100 forintonként</Text>
          <Text style={[styles.p,{textAlign:"center"}]}>kivéve a Gyógyszerek, illetve a TB-támogatott termékek után</Text>
        </Card>
        <Card containerStyle={{backgroundColor:"#FFEBD2", width: "50%", margin: 4, borderRadius: 8, padding: 16 }}>
          <Text style={styles.h1}>10%</Text>
          <Text style={[styles.h2, { fontWeight: "bold" }]}>kedvezmény</Text>
          <Text style={[styles.p,{textAlign:"center"}]}>kivéve a vényköteles, illetve a TB-támogatott termékek után</Text>
        </Card>
      </View>
    </Card>

  )
}

const styles = StyleSheet.create({
  divider: { width: "100%", height: 1, margin: 16, backgroundColor: colors.secondary },
  cardContainer: { borderRadius: 8 },
  h1: { color: colors.primary, fontWeight: "bold", fontSize:36, textAlign: "center" },
  h2: { color: colors.primary, fontSize: 20, textAlign: "center" },
  p: { color: colors.primary }
});