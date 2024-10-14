import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen, {
  LoginForgotPasswordPage,
} from "../screens/Auth/LoginScreen";
import SignUpScreen, { SignUpSectionPhone } from "../screens/Auth/SignUpScreen";
import IntroOneScreen from "../screens/IntroOneScreen";
import IntroTwoScreen from "../screens/IntroTwoScreen";
import HomeStackNavigator from "./HomeStackNavigator";

const Stack = createNativeStackNavigator();
export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='IntroOne' component={IntroOneScreen}/>
      <Stack.Screen name='IntroTwo' component={IntroTwoScreen}/>
      <Stack.Screen name="SignupScreen" component={SignUpScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="LoginForgot" component={LoginForgotPasswordPage} />
    </Stack.Navigator>
  );
}

export function AuthenticatedStack() {
  return ( 
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={HomeStackNavigator}/>


  </Stack.Navigator>
  
)
}


const styles = StyleSheet.create({});
