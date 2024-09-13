import React, { Component, ReactNode } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './src/Screens/Main/HomeScreen';
import PharmanciesScreen from './src/Screens/Main/PharmanciesScreen';
import SalesScreen from './src/Screens/Main/SalesScreen';
import { NavigationContainer } from '@react-navigation/native';
import MainHeader from './src/Components/Headers/MainHeader';
import { createStackNavigator } from '@react-navigation/stack';
import MessagesScreen from './src/Screens/Other/MessagesScreen';
import { MenuScreen } from './src/Screens/Menu/MenuScreen';
import { MessagesHeader } from './src/Components/Headers/MessagesHeader';
import { MenuHeader } from './src/Components/Headers/MenuHeader';
import { Image, StyleSheet } from 'react-native';
import { CouponScreen } from './src/Screens/Main/CouponScreen';

type NodeDictionary = {
    [key: string]: ReactNode;
  };

const Tabs = ()=>{
    const Icons :NodeDictionary ={
        "Home":<Image style={styles.logo} source={require('./src/assests/icons/004-home.png')}/>,
        "Coupon":<Image style={styles.logo} source={require('./src/assests/icons/005-coupon.png')}/>,
        "Sales":<Image style={styles.logo} source={require('./src/assests/icons/030-pluspill.png')}/>,
        "Pharmacies":<Image style={styles.logo} source={require('./src/assests/icons/008-location.png')}/>,

    }

    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{headerShown:false, tabBarStyle:{height:72,paddingBottom:16}}} initialRouteName='Coupon'>
            <Tab.Screen options={{tabBarIcon:()=>{ return Icons["Home"]}}} name="Home" component={HomeScreen} />
            <Tab.Screen options={{tabBarIcon:()=>{ return Icons["Coupon"]}}} name="Coupon" component={CouponScreen} />
            <Tab.Screen options={{tabBarIcon:()=>{ return Icons["Sales"]}}} name="Sales" component={SalesScreen} />
            <Tab.Screen options={{tabBarIcon:()=>{ return Icons["Pharmacies"]}}} name="Pharmacies" component={PharmanciesScreen} />
        </Tab.Navigator>
    );

}

export default function App() {

    const rootStack = createStackNavigator();

    return (
        <NavigationContainer>
            <rootStack.Navigator screenOptions={{header:MainHeader}} initialRouteName='Tabs'>
                <rootStack.Screen name="Tabs" component={Tabs} />
                <rootStack.Screen options={{header:MessagesHeader}} name="Messages" component={MessagesScreen} />
                <rootStack.Screen options={{header:MenuHeader}} name="Menu" component={MenuScreen} />
            </rootStack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    logo:{width:24, height:24, resizeMode:"contain"}
})
