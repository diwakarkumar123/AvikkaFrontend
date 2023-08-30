import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './main/MainScreen'

const Drawer = createDrawerNavigator()

const Index = () => {

    return (
        <Drawer.Navigator>
            <Drawer.Screen name='main' component={MainScreen} />
        </Drawer.Navigator>
    )
}

export default Index

const styles = StyleSheet.create({})