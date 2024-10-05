import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useFonts } from "expo-font";
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {Colors} from "./constants/colors"
import SignInScreen from './screens/SignInScreen';
import MainScreen from './screens/MainScreen';
import { EVENTS } from './data/dummy-data';
import HeaderSections from './components/HeaderSections';

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
} from '@expo-google-fonts/poppins';

 
export default function App() {

  console.log('APP:JS',EVENTS);


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
*/


  return (

  
      <SafeAreaView>
       
       <MainScreen/>

  

       </SafeAreaView>
  
  );
  

  
}

const styles = StyleSheet.create({

})
