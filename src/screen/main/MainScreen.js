import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './screen/HomeScreen'
import CategoriesScreen from './screen/CategoriesScreen'
import BrandScreen from './screen/BrandScreen'
import OfferScreen from './screen/OfferScreen'
import StudioScreen from './screen/StudioScreen'


const Tab = createBottomTabNavigator()

const MainScreen = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name='home' component={HomeScreen} />
            <Tab.Screen name='Categories' component={CategoriesScreen} />
            <Tab.Screen name='Brand' component={BrandScreen} />
            <Tab.Screen name='Offer' component={OfferScreen} />
            <Tab.Screen name='Studio' component={StudioScreen} />
        </Tab.Navigator>
    )
}

export default MainScreen

const styles = StyleSheet.create({})