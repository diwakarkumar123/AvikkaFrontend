import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Discount_img } from '../../../../../configs/Source'
import AntDesign from 'react-native-vector-icons/AntDesign'
const { width, height } = Dimensions.get('screen')
import auth from '@react-native-firebase/auth';

const Login = ({ toggleModal }) => {
  const [mobilenumber, setmobilenumber] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [confirmation, setConfirmation] = useState(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleTextChange = (newText) => {
    if (!newText.startsWith('+91')) {
      setmobilenumber('+91' + newText);
    } else {
      setmobilenumber(newText);
    }
  };
  const handleSendCode = async () => {
    console.log(mobilenumber)
    try {
      const confirmation = await auth().signInWithPhoneNumber(mobilenumber);
      setConfirmation(confirmation);
    } catch (error) {
      console.error('Error sending verification code: ', error);
    }
  };

  console.log(mobilenumber)

  return (
    <View>

      <View style={{ position: 'absolute', bottom: height * 0.5, right: width * 0.09 }}>
        <TouchableOpacity onPress={toggleModal} >
          <AntDesign name='closecircle' size={25} color={'#000'} />
        </TouchableOpacity>
      </View>
      <View
        style={styles.logintop_container}>
        <View style={styles.modelinternal_wraper}>
          <View style={{ marginTop: height * 0.025 }}>
            <Image
              source={Discount_img}
              style={{ width: '100%', height: height * 0.15, }}
              resizeMode="cover" />

          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 500, color: '#000' }}>
              Login or Signup
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={handleTextChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={mobilenumber}
              // placeholder={isFocused || mobilenumber !== '' ? '+1-' : 'Enter a 10-digit mobile number'}
              placeholder={'Enter a 10-digit mobile number'}

              placeholderTextColor="#000"
              keyboardType="numeric" // Set the keyboard type to numeric

            />
          </View>
          <TouchableOpacity onPress={handleSendCode}>

            <View style={styles.bottombutton}>
              <Text style={{ fontSize: 16, fontWeight: 500, color: '#000', opacity: 0.4 }}>
                Continue
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ marginVertical: 5 }}>
              <Text style={{ fontSize: 13, textAlign: 'center' }}>
                By continuing, you agree to Advika's
                <Text style={styles.blueText}> Terms of use</Text> and {'\n'}
                <Text style={[styles.blueText,]}>privacy policy</Text>
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default React.memo(Login);

const styles = StyleSheet.create({
  logintop_container: {
    flex: 1,
    width: width,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: '#ffff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: height * 0.49,
    position: 'absolute',
    bottom: 0,

  },
  modelinternal_wraper: {
    marginRight: width * 0.05,
    marginLeft: width * 0.05,
    // backgroundColor:'red',
    // marginTop:height*0.021

  },
  input: {
    // height: 40,
    borderColor: '#a19e9d',
    borderWidth: 1,
    paddingHorizontal: 10,
    padding: height * 0.020,
    borderRadius: 8,
    backgroundColor: '#fff',
    opacity: 0.6

  },
  bottombutton: {
    borderColor: '#a19e9d',
    borderWidth: 1,
    marginVertical: 15,
    padding: height * 0.020,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a19e9d',
    opacity: 0.4
  },
  blueText: {
    color: 'blue',
  },

})