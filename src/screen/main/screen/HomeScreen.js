import { Dimensions, StyleSheet, Text, View ,Platform} from 'react-native'
import React from 'react'
import Header from './component/Header';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign'
const { width, height } = Dimensions.get('screen')
const HomeScreen = () => {

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.content}>
        <View style={styles.shadowBox}>
          <View style={{width:width*0.14}}>
          <AntDesign name="search1" size={25} color='#000' />

          </View>
          <View style={{width:width*0.6,}}>
          <Text>
            What are you looking for ?
          </Text>

          </View>

        </View>
        <View style={styles.address_wraper}> 
          <View style={{width:width*0.1,justifyContent:'center',alignItems:'center'}}>
          <AntDesign name="enviromento" size={25} color='pink' />

          </View>
          <View style={{width:width*0.2,}}>
          <Text>
            Deliver to -
          </Text>

          </View>
          <View style={{width:width*0.5,}}>
          <Text>
            PATNA,800020
          </Text>

          </View>

          <View style={{width:width*0.1,justifyContent:'center',alignItems:'center'}} >
          <AntDesign name="down" size={20} color='#000' />

          </View>

        </View>

      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  content: {
    flex: 12,
    // justifyContent: 'center',
    // alignItems: 'center',
    // Optionally, you can add more styles here for the content area.
  },
  shadowBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: width * 0.03,
    marginRight: width * 0.03,

    backgroundColor: '#fff', // Set the background color of the box
    padding: 10, // Adjust padding as needed
    borderRadius: 8, // Adjust border radius as needed
    ...Platform.select({
      // ios: {
      //   shadowColor: 'black',
      //   shadowOffset: { width: 0, height: 2 },
      //   shadowOpacity: 0.2,
      //   shadowRadius: 4,
      // },
      android: {
        elevation: 4, // This adds elevation (shadow) on Android
      },
    }),
  },

  address_wraper:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: width * 0.03,
    marginRight: width * 0.03,
    backgroundColor:'#fff',
    padding: 6,
    marginTop:3
  }
})