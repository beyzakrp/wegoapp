import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export function AuthContent ({isLogin, onAuthhenticate}) {
    const navigation = useNavigation();

    const [credentialIsInvalid, setCredentialsInvalid] = useState({
        email: false,
        phoneNumber: false,
        name: false,
        surname: false,
        username: false,


    });
  return (
    <View>
      <AuthContent/>
    </View>
  )
}



const styles = StyleSheet.create({})