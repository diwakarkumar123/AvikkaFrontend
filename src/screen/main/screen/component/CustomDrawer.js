import { Dimensions, StyleSheet, Text, View, ScrollView, Pressable, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const { width, height } = Dimensions.get('screen')
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const CustomDrawer = ({ props }) => {
    const navigation = useNavigation()

    const Top_section_data = [
        {
            name: 'Shop by Category',
            icon: 'bars',
            onPress: () => {
                navigation.navigate('Categories')
            }
        },
        {
            name: 'Explore Brands',
            icon: 'tago',
            onPress: () => {
                navigation.navigate('Brand')
            }
        },
        {
            name: 'Offers',
            icon: 'gift',
            onPress: () => {
                navigation.navigate('Offer')
            }
        },
        {
            name: 'Newbies',
            icon: 'staro',
            onPress: () => {
                navigation.navigate('')
            }
        },
        {
            name: 'Unique at purplle',
            icon: 'staro',
            onPress: () => {
                navigation.navigate('')
            }
        },
        {
            name: 'SPLURGE-The Luxury Store',
            icon: 'staro',
            onPress: () => {
                navigation.navigate('')
            }
        },
        {
            name: 'Elite',
            icon: 'staro',
            onPress: () => {
                navigation.navigate('')
            }
        },
        {
            name: 'Magazine',
            icon: 'book',
            onPress: () => {
                navigation.navigate('')
            }
        }




    ]
    const order_data = [
        {
            name: 'My orders',
            icon: 'isv',
            onPress: () => {
                navigation.navigate('')
            }

        },
        {
            name: 'My Wishlist',
            icon: 'hearto',
            onPress: () => {
                navigation.navigate('')
            }

        },
        {
            name: 'My Acccount',
            icon: 'smileo',
            onPress: () => {
                navigation.navigate('')
            }

        }


    ]
    const customer_data = [
        {
            name: 'Customer Support',
            icon: 'phone',
            onPress: () => {
                navigation.navigate('')
            }

        },
        {
            name: 'Privacy Policy',
            icon: 'lock',
            onPress: () => {
                navigation.navigate('')
            }

        },
        {
            name: 'Term & Conditions',
            icon: 'form',
            onPress: () => {
                navigation.navigate('')
            }

        },
        {
            name: 'FeedBack',
            icon: 'mail',
            onPress: () => {
                navigation.navigate('')
            }

        },
        {
            name: 'About Purplle',
            icon: 'book',
            onPress: () => {
                navigation.navigate('')
            }

        }




    ]


    return (
        <View style={styles.container}>

            <ScrollView >

            <View style={styles.topcontainer}>
                <View style={{ width: width * 0.1, }}>
                    <AntDesign name="home" size={25} color={'#fff'} />

                </View>
                <View style={{ width: width * 0.7, }}>
                    <Text style={{ fontSize: 16, color: '#fff' }}>Home</Text>


                </View>
            </View>

            <View style={styles.topsection} >
                <FlatList
                    data={Top_section_data}
                    scrollEnabled={false}

                    renderItem={({ item, index }) => (
                        <Pressable onPress={item?.onPress} style={styles.sectiondata_wraper}>
                            {/* <Image source={item?.icon} style={styles.icon} /> */}
                            <View style={{ width: width * 0.1 }}>
                                <AntDesign name={item?.icon} size={25} color={'#000'} />

                            </View>
                            <View style={{ width: width * 0.7, }}>
                                <Text style={{ fontSize: 16, color: '#000' }}>{item?.name}</Text>

                            </View>
                        </Pressable>
                    )} />
                <View style={styles.bottomBorder} />

            </View>

            {/* socials button  */}

            <View style={styles.topsection} >
                <FlatList
                    data={order_data}
                    scrollEnabled={false}
                    renderItem={({ item, index }) => (
                        <Pressable onPress={item?.onPress} style={styles.sectiondata_wraper}>
                            {/* <Image source={item?.icon} style={styles.icon} /> */}
                            <View style={{ width: width * 0.11 }}>
                                <AntDesign name={item?.icon} size={25} color={'#000'} />

                            </View>
                            <View style={{ width: width * 0.7, }}>
                                <Text style={{ fontSize: 16, color: '#000' }}>{item?.name}</Text>

                            </View>
                        </Pressable>
                    )} />
                <View style={styles.bottomBorder} />

            </View>

            <View style={styles.topsection} >
                <FlatList
                    data={customer_data}
                    scrollEnabled={false}
                    renderItem={({ item, index }) => (
                        <Pressable onPress={item?.onPress} style={styles.sectiondata_wraper}>
                            {/* <Image source={item?.icon} style={styles.icon} /> */}
                            <View style={{ width: width * 0.1 }}>
                                <AntDesign name={item?.icon} size={25} color={'#000'} />

                            </View>
                            <View style={{ width: width * 0.7, }}>
                                <Text style={{ fontSize: 16, color: '#000' }}>{item?.name}</Text>

                            </View>
                        </Pressable>
                    )} />

            </View>






            </ScrollView>

        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height * 1,
    },
    topcontainer: {
        width: width * 0.8,

        backgroundColor: 'purple',
        flexDirection: 'row',
        alignItems: 'center',
        padding: height * 0.017,
    },
    topsection: {
        // backgroundColor:'red',
        width: width * 0.8,
        padding: height * 0.011,

        // backgroundColor: 'green',


    },
    sectiondata_wraper: {
        flexDirection: 'row',
        padding: 7,
        alignItems: 'center',

    },
    bottomBorder: {
        borderBottomWidth: 2,
        borderColor: 'gray', // You can change the color to match your design
        width: '100%',
        marginVertical: height * 0.015,
        opacity: 0.2
    },


})