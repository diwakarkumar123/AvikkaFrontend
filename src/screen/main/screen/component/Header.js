import { Dimensions, StyleSheet, Text, View, StatusBar, TouchableOpacity, Modal, FlatList, Pressable, TouchableWithoutFeedback ,SafeAreaView,Image,TextInput} from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
const { width, height } = Dimensions.get('screen')
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import Login from './login/Login';
// import {Discount_img} from '../../../../configs/Source.js'
const Header = (props) => {
    const navigation = useNavigation();
    const [visibleModal, setVisibleModal] = useState(false);
    const [loginvisibleModal, setloginVisibleModal] = useState(false);
    
    // const [text, setText] = useState('');
    // const [isFocused, setIsFocused] = useState(false);
    // const handleFocus = () => {
    //     setIsFocused(true);
    //   };
    
    //   const handleBlur = () => {
    //     setIsFocused(false);
    //   };
    
    //   const handleTextChange = (newText) => {
    //     if (!newText.startsWith('+91-')) {
    //       setText('+91-' + newText);
    //     } else {
    //       setText(newText);
    //     }
    //   };
    
     const toggleModal = () => {
        // if (loginvisibleModal) {
        //   // Reset the input text and focus state when closing the modal
        //   setText('');
        //   setIsFocused(false);
        // }
        setloginVisibleModal(false);
      };
    
    // const placeholderText = isFocused || text !== '' ? '+91-' : 'Enter a 10-digit mobile number';

      // const img='https://media6.ppl-media.com/mediafiles/ecomm/misc/1675859616_799-app.gif?tr=f-gif'
    const Top_section_data = [
        {
            name: 'My Account',
            icon: 'smileo',
            onPress: () => {
                navigation.navigate('Categories')
            }
        },
        {
            name: 'Elite Membership',
            icon: 'checkcircleo',
            onPress: () => {
                navigation.navigate('')
            }
        },
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
            name: 'Skin Expert',
            icon: 'dingding',
            onPress: () => {
                navigation.navigate('')
            }
        },
        {
            name: 'My Reviews',
            icon: 'edit',
            onPress: () => {
                navigation.navigate('')
            }
        },
        {
            name: 'Settings',
            icon: 'setting',
            onPress: () => {
                navigation.navigate('')
            }
        },
        {
            name: 'Refer & Earn',
            icon: 'export2',
            onPress: () => {
                navigation.navigate('')
            }
        },
        {
            name: 'Login or Register',
            icon: 'smileo',
            onPress: () => {
                setloginVisibleModal(true)
            }
        }





    ]

    const closeModal = () => {
        setVisibleModal(false);
    };

    const openmodel = () => {

        return (
            <Modal visible={visibleModal} transparent animationType="slide">
                <TouchableWithoutFeedback onPress={closeModal}>

                    <View style={styles.modalContainer}>
                        <View style={styles.cardContainer}>

                            <View style={styles.card}>

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
                            </View>
                        </View>


                    </View>
                </TouchableWithoutFeedback>

            </Modal>
        )
    }


    const loginmodel=()=>{
        return(
      <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={loginvisibleModal}>
               <TouchableOpacity
          style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.60)'}}
          onPressIn={toggleModal}
      />
                     <Login toggleModal={toggleModal}/>
        
        {/* <View style={{ position: 'absolute', bottom: height*0.5, right:width*0.09}}>
            <TouchableOpacity onPress={toggleModal} >
        <AntDesign name='closecircle' size={25} color={'#000' }   />
        </TouchableOpacity>
        </View>
        <View
          style={styles.logintop_container}>
            <View style={styles.modelinternal_wraper}>
                <View style={{marginTop:height*0.025}}>
                <Image
                                source={Discount_img}
                                style={{ width:'100%', height: height*0.15,}}
                                resizeMode="cover" />

                </View>
                <View style={{justifyContent:'center',alignItems:'center',marginVertical:10}}>
                    <Text style={{fontSize:16,fontWeight:500,color:'#000'}}>
                        Login or Signup
                    </Text>
                </View>
                <View>
        <TextInput
        style={styles.input}
        onChangeText={handleTextChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={text}
        placeholder={isFocused || text !== '' ? '+91-' : 'Enter a 10-digit mobile number'}
        placeholderTextColor="#000"
                keyboardType="numeric" // Set the keyboard type to numeric

      />
    </View>
    <View style={styles.bottombutton}>
        <TouchableOpacity>
            <Text style={{fontSize:16,fontWeight:500,color:'#000',opacity:0.4}}>
                Continue
            </Text>
        </TouchableOpacity>
    </View>
    <TouchableOpacity>
    <View style={{marginVertical:5}}>
      <Text style={{fontSize:13,textAlign:'center'}}>
        By continuing, you agree to Advika's
        <Text style={styles.blueText}> Terms of use</Text> and {'\n'}
        <Text style={[styles.blueText,]}>privacy policy</Text>
      </Text>
    </View>
    </TouchableOpacity>
            </View>
        </View> */}
      </Modal>
      </SafeAreaView>

        )
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="purple" barStyle="light-content" />

            <View style={styles.headercontainer}>
                <View style={styles.rightside}>
                    <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                        <AntDesign name="menu-unfold" color='#000' size={23} />

                    </TouchableOpacity>
                    <Text style={{ fontSize: 19, color: '#000', fontWeight: 800, paddingLeft: width * 0.028 }}> Avvika</Text>
                </View>
                <View style={styles.leftside}>
                    <TouchableOpacity>
                        <AntDesign name="shoppingcart" color='#000' size={23} style={{ marginRight: width * 0.034 }} />

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setVisibleModal(true) }}>
                        <AntDesign name="smileo" color='#000' size={23} />

                    </TouchableOpacity>

                </View>
                {
                    openmodel()
                }
                {
                    loginmodel()
                }

            </View>
        </View>
    )
}

export default React.memo(Header);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff'

    },
    headercontainer: {
        flexDirection: 'row',
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        padding: 9,
        width: width * 0.9,

        // backgroundColor:'red'
    },
    rightside: {
        flexDirection: 'row',
        width: width * 0.4,
        // backgroundColor:'green',
        alignItems: 'center'
    },
    leftside: {
        flexDirection: 'row',
        width: width * 0.45,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent background to cover the whole screen



    },
    cardContainer: {
        width: width * 0.54, // Set the desired width for your card
        alignSelf: 'flex-end', // Position the card to the right
        marginRight: width * 0.04, // Adjust margin as 
        marginTop: height * 0.010, // Adjust margin as needed

    },

    sectiondata_wraper: {
        flexDirection: 'row',
        marginVertical: 8,
        //   backgroundColor:'red',
        paddingLeft: 7
    },

    modalItem: {
        padding: 15,
        backgroundColor: 'white',
    },
    card: {
        backgroundColor: 'white',
        // borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    
})






