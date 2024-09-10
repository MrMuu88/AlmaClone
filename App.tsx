import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './src/Screens/Main/HomeScreen';
import PharmanciesScreen from './src/Screens/Main/PharmanciesScreen';
import SalesScreen from './src/Screens/Main/SalesScreen';
import CouponScreen from './src/Screens/Main/CouponScreen';
import { NavigationContainer } from '@react-navigation/native';
import TabHeaderComponent from './src/Components/TabHeaderComponent';

export default class App extends Component {
    render() {

        const Tab = createBottomTabNavigator();

        return (
            <NavigationContainer>
                <Tab.Navigator screenOptions={{header:TabHeaderComponent}}>
                    <Tab.Screen name="home" component={HomeScreen} />
                    <Tab.Screen name="Coupon" component={CouponScreen} />
                    <Tab.Screen name="Sales" component={SalesScreen} />
                    <Tab.Screen name="Pharmacies" component={PharmanciesScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}