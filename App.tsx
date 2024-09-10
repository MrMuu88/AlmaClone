import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './src/Screens/Main/HomeScreen';
import PharmanciesScreen from './src/Screens/Main/PharmanciesScreen';
import SalesScreen from './src/Screens/Main/SalesScreen';
import CouponScreen from './src/Screens/Main/CouponScreen';
import { NavigationContainer } from '@react-navigation/native';
import MainHeader from './src/Components/Headers/MainHeader';
import { createStackNavigator } from '@react-navigation/stack';
import MessagesScreen from './src/Screens/Other/MessagesScreen';
import ProfileScreen from './src/Screens/Menu/ProfileScreen';
import { MenuScreen } from './src/Screens/Menu/MenuScreen';
import { MessagesHeader } from './src/Components/Headers/MessagesHeader';
import { MenuHeader } from './src/Components/Headers/MenuHeader';

const Tabs = ()=>{
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Coupon" component={CouponScreen} />
            <Tab.Screen name="Sales" component={SalesScreen} />
            <Tab.Screen name="Pharmacies" component={PharmanciesScreen} />
        </Tab.Navigator>
    );

}

export default function App() {

    const rootStack = createStackNavigator();

    return (
        <NavigationContainer>
            <rootStack.Navigator screenOptions={{header:MainHeader}}>
                <rootStack.Screen name="Tabs" component={Tabs} />
                <rootStack.Screen options={{header:MessagesHeader}} name="Messages" component={MessagesScreen} />
                <rootStack.Screen options={{header:MenuHeader}} name="Menu" component={MenuScreen} />
            </rootStack.Navigator>
        </NavigationContainer>
    )
}
