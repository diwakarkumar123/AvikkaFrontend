import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Index from './src/screen/Index'
import CustomDrawer from './src/screen/main/screen/component/CustomDrawer'

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Index'
          component={Index}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>

    </NavigationContainer>
    // <View>
    //   <CustomDrawer/>
    // </View>
  )
}

export default App

const styles = StyleSheet.create({})