import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainScreen from '../screens/Home/MainScreen';
import MapScreen from '../screens/Map/MapScreen';
import ShotScreen from '../screens/Shot/ShotScreen';
import ChatScreen from '../screens/Chat/ChatScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import {Feather} from "@expo/vector-icons/Feather";
import Colors from '../constants/colors';
import CustomTabBarSection from '../components/CustomTabBarSection';

const AppTheme = {
  // color: Colors.black[300],
  // size: 24,
   colors: {
     background:Colors.white.null,
     
   }}

const Tab = createBottomTabNavigator();

function TabNavigator ()  {
  return (
  
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      headerShown: false
     
    }} tabBar={(props) => <CustomTabBarSection {...props}/>}>
       <Tab.Screen name='home' component={MainScreen}/>
        <Tab.Screen name='map-pin' component={MapScreen}/>
        <Tab.Screen name='play' component={ShotScreen}/>
        <Tab.Screen name='message-circle' component={ChatScreen}/>
        <Tab.Screen name='user' component={ProfileScreen}/>
    </Tab.Navigator>
 
  )
}

export default TabNavigator

const styles = StyleSheet.create({})

/**/