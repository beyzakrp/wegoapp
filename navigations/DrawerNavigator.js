import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import LikedDrawerScreen from '../screens/Home/LikedDrawerScreen';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();



function DrawerNavigator() {
  return (
  <Drawer.Navigator>
    <Drawer.Screen name='Liked' component={TabNavigator}/>
  </Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})