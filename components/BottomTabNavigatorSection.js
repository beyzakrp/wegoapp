import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feather from "@expo/vector-icons/Feather";
import ProfileScreen from '../screens/Profile/ProfileScreen';
import ChatScreen from '../screens/Chat/ChatScreen';
import ShotScreen from '../screens/Shot/ShotScreen';
import MapScreen from '../screens/Map/MapScreen';
import MainScreen from '../screens/Home/MainScreen';
import Colors from '../constants/colors';


const BottomTab = createBottomTabNavigator();

function BottomTabNavigatorSection  () {

  return (

    <NavigationContainer>
    <BottomTab.Navigator
      
    >
      <BottomTab.Screen
        name="homep"
        component={MainScreen}
        
    
      />

      <BottomTab.Screen
        name="Map"
        component={MapScreen}
        options={{  
          //headerTitle: (props) => <LogoTitle {...props} />,
          //headerShadowVisible: false ,
         // headerStyle: {},
        }}
      />
      <BottomTab.Screen
        name="Shot"
        component={ShotScreen}
        options={{
          //headerTitle:(props)=> <BeforeTitleSection {...props}/>,
          //headerStyle: {
          //backgroundColor: "rgba(0,0,0,1)",}
        }}
      />
      <BottomTab.Screen
        name="1hat"
        component={ChatScreen}
        options={{
          //headerTitle:(props)=> <BeforeTitleSection {...props}/>,
          //headerStyle: {
          //backgroundColor: "rgba(0,0,0,1)",}
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          //headerTitle:(props)=> <BeforeTitleSection {...props}/>,
          //headerStyle: {
          //backgroundColor: "rgba(0,0,0,1)",}
        }}
      />

    </BottomTab.Navigator>
  </NavigationContainer>

  )
}

export default BottomTabNavigatorSection

const styles = StyleSheet.create({})