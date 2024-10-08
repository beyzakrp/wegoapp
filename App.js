import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import  Colors  from "./constants/colors";
import { EVENTS } from "./data/dummy-data";
import HeaderSections from "./components/HeaderSections";
import Feather from "@expo/vector-icons/Feather";

import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogoTitle from "./components/LogoTitle";
import BeforeTitleSection from "./components/BeforeTitleSection";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTabNavigatorSection from "./components/BottomTabNavigatorSection";
import MainNavigator from "./navigations/MainNavigator";
import TabNavigator from "./navigations/TabNavigator";
import HomeStackNavigator from "./navigations/HomeStackNavigator";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  const AppTheme = {
    color: Colors.black[300],
    size: 24,
    colors: {
      background:Colors.white.null,
    },
  };

  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  return (
    // <SafeAreaView>
    <>
      <StatusBar style="dark" />
      <HomeStackNavigator/>
     



      
      
    </>
    //  </SafeAreaView>
  );
}
const styles = StyleSheet.create({});

// SplashScreen.preventAutoHideAsync();

/*
  const[loaded, error] =  useFonts({
      "p-black": require("./assets/fonts/proximanova-black.otf"),
      "p-bold": require("./assets/fonts/proximanova-bold.otf"),
      "p-extrabold": require("./assets/fonts/proximanova-extrabold.otf"),
      "p-light": require("./assets/fonts/proximanova-light.otf"),
      "p-medium": require("./assets/fonts/proximanova-medium.otf"),
      "p-regular": require("./assets/fonts/proximanova-regular.otf"),
      "p-semibold": require("./assets/fonts/proximanova-semibold.otf"),
      "p-thin": require("./assets/fonts/proximanova-thin.otf"),
    });
*/

/*useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    
  }
}, [loaded, error]);

if (!loaded && !error) {
  return null;
}

<NavigationContainer>
        <BottomTab.Navigator>
            <BottomTab.Screen
            name="Main"
            component={MainScreen}/>
        </BottomTab.Navigator>
  "   </NavigationContainer>
*/


    /* 
    <NavigationContainer theme={AppTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{
              //headerShown: false,
              
            }}
        
          />

          <Stack.Screen
            name="EventDetails"
            component={EventDetailsScreen}
            options={{  
              //headerTitle: (props) => <LogoTitle {...props} />,
              //headerShadowVisible: false ,
             // headerStyle: {},
            }}
          />
          <Stack.Screen
            name="BeforeDetails"
            component={BeforeDetailsScreen}
            options={{
              //headerTitle:(props)=> <BeforeTitleSection {...props}/>,
              //headerStyle: {
              //backgroundColor: "rgba(0,0,0,1)",}
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    */
