import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen, { LoginForgotPasswordPage } from '../screens/Auth/LoginScreen';
import SignUpScreen, { SignUpSectionPhone } from '../screens/Auth/SignUpScreen';


const Stack = createNativeStackNavigator();
function AuthNavigator(){
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='SignupScreen' component={SignUpScreen}/>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name='LoginForgot' component={LoginForgotPasswordPage}/>

   </Stack.Navigator>
  )
}

export default AuthNavigator

const styles = StyleSheet.create({})