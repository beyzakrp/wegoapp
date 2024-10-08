import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator'
import HomeStackNavigator from './HomeStackNavigator'
import Colors from '../constants/colors'



const AppTheme = {
   // color: Colors.black[300],
   // size: 24,
    colors: {
      background:Colors.white.null,
    }}
function MainNavigator (){
    
  return (
    <>
<NavigationContainer >
    <HomeStackNavigator/>
</NavigationContainer>


</>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})