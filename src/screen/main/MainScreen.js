import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './screen/HomeScreen'
import CategoriesScreen from './screen/CategoriesScreen'
import BrandScreen from './screen/BrandScreen'
import OfferScreen from './screen/OfferScreen'
import StudioScreen from './screen/StudioScreen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const Tab = createBottomTabNavigator()

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        activeTintColor: 'purple', // Set active tab icon and text color
        inactiveTintColor: '#000', // Set inactive tab icon and text color
        labelStyle: { fontSize: 12 }, // Adjust label style
      }}
    >
      <Tab.Screen
        name='home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="bars" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Brand'
        component={BrandScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="tago" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Offer'
        component={OfferScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="isv" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Studio'
        component={StudioScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="live-tv" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>

  )
}

export default MainScreen

const styles = StyleSheet.create({})