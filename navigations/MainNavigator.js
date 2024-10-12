import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator'
import HomeStackNavigator from './HomeStackNavigator'
import Colors from '../constants/colors'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import IntroOneScreen from '../screens/IntroOneScreen'
import IntroTwoScreen from '../screens/IntroTwoScreen'
import AuthNavigator from './AuthNavigator'


const Stack= createNativeStackNavigator();

const AppTheme = {
   // color: Colors.black[300],
   // size: 24,
    colors: {
      background:Colors.white.null,
    }}
function MainNavigator (){
    
  return (
    <>
<NavigationContainer theme={AppTheme}>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='IntroOne' component={IntroOneScreen}/>
      <Stack.Screen name='IntroTwo' component={IntroTwoScreen}/>
      <Stack.Screen name='Auth' component={AuthNavigator}/>
      <Stack.Screen name='Home' component={HomeStackNavigator}/>


    </Stack.Navigator>
</NavigationContainer>


</>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})