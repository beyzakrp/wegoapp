import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import Colors from "./constants/colors";

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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainNavigator from "./navigations/MainNavigator";
import AuthContextProvider, { AuthContext } from "./store/context/auth-context";
import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoadingOverlay from "./components/LoadingOverlay";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  const AppTheme = {
    color: Colors.black[300],
    size: 24,
    colors: {
      background: Colors.white.null,
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
      <AuthContextProvider>
        <Root/>
      </AuthContextProvider>
    </>
    //  </SafeAreaView>
  );
}

function Root(){
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
        const storedToken = await AsyncStorage.getItem('token');
        if(storedToken) {
            authCtx.authenticate(storedToken);
        }
        setIsTryingLogin(false);
    }
    fetchToken();
  }, []);

  if(isTryingLogin){
    return <LoadingOverlay/>
  }
  return <MainNavigator/>;
}
const styles = StyleSheet.create({});

