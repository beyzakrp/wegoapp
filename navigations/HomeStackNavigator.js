import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import EventDetailsScreen from '../screens/Home/EventDetailsScreen';
import BeforeDetailsScreen from '../screens/Home/BeforeDetailsScreen';
import AfterDetailsScreen from '../screens/Home/AfterDetailsScreen';
import TabNavigator from './TabNavigator';
import Colors from '../constants/colors';
import DrawerNavigator from './DrawerNavigator';



const Stack =createNativeStackNavigator();


function HomeStackNavigator () {


const AppTheme = {
  // color: Colors.black[300],
  // size: 24,
   colors: {
     background:Colors.white.null,
     
   }}

  return (
    <NavigationContainer theme={AppTheme}>
        <Stack.Navigator> 
          <Stack.Screen name='main' component={TabNavigator} options={{headerShown: false}}/>


            <Stack.Screen name='EventDetails' component={EventDetailsScreen}/>
            <Stack.Screen name='BeforeDetails' component={BeforeDetailsScreen}/> 
            <Stack.Screen name='AfterDetails' component={AfterDetailsScreen}/>

        </Stack.Navigator>
        </NavigationContainer>
    
  )
}

export default HomeStackNavigator

const styles = StyleSheet.create({})

/* options={{  headerRight: () => {
                return (
                    <IconButtonSection 
                    onPress={headerButtonPressHandler}
                    name={"bell"}
                    size={24}
                    color={'#333333'} />
                );
              },
              headerTitle: () => {
                return (
                  <Image
                    style={[{ width: 75, height: 24 }]}
                    source={require("/Users/beyzakarapicak/wgapp/assets/images/wegoBlackLogo.png")}
                  />
                );
              },
              headerShadowVisible: false,
              headerTitleAlign: "center",
              hideWhenScrolling: false,
            }}*/