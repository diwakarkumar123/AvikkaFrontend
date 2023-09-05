import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './main/MainScreen'
import CategoriesScreen from './main/screen/CategoriesScreen'
import CustomDrawer from './main/screen/component/CustomDrawer'
import Header from './main/screen/component/Header'
const Drawer = createDrawerNavigator()

const Index = () => {

    return (
        <Drawer.Navigator drawerContent={(props)=>(<CustomDrawer {...props}/>)}  initialRouteName='Main' >
            <Drawer.Screen name='Main' component={MainScreen} options={{headerShown: false,
            
                header: (props) => (
                    <Header {...props} />),
            }}
            
            />
        </Drawer.Navigator>
    )
}

export default Index

const styles = StyleSheet.create({})