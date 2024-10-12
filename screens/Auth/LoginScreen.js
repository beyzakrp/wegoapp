import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinkButton from '../../components/LinkButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthPageTitle } from '../../components/AuthPageTitle'
import { AuthPageSubtitle } from '../../components/AuthPageSubtitle'
import InputSection from '../../components/InputSection'
import PrimaryButton from "../../components/PrimaryButton";
import Colors from '../../constants/colors'
import { useNavigation } from '@react-navigation/native'



export default function LoginScreen ({navigation})  {

  function backPressHandler(){
    navigation.goBack();
}
  function forgotPasswordHandler(){
    navigation.navigate("LoginForgot");
  }
  return (
   
    <SafeAreaView>
        <AuthPageTitle onPress={backPressHandler}/>
    <AuthPageSubtitle children={"Sign In"}/>
    <InputSection
        children={"E-mail"}
       // inputKeyboardType={"number-pad"}
        nameTag={"example@example.com"}
        isInfoMessage={false}
        
      />
       <InputSection
        children={"Password"}
       // inputKeyboardType={"number-pad"}
  
        isInfoMessage={false}
        
      />

    <View style={{flexDirection:'row', justifyContent: 'flex-end', paddingHorizontal: '5%', paddingVertical: '1%'}}>
            <LinkButton linkText={"Forgot Password?"} onPress={forgotPasswordHandler} />
    </View>


    <PrimaryButton
        buttonColor={Colors.black.default}
        children={"Summit"}
        buttonFontFamily={"Poppins_700Bold"}
        verticalMargin={"8%"}
       // onPress={}
      />
    </SafeAreaView>
  )
}

export  function LoginForgotPasswordPage({navigation}){
 // (!navigation) ? console.error("navigatin prop hata") : console.log("Geçtş")
    function backPressHandler(){
        navigation.goBack();
  }

  return (
    <SafeAreaView>
      <AuthPageTitle onPress={backPressHandler}/>
      <AuthPageSubtitle children={"Forgot Password"}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})