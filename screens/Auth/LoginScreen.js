import { StyleSheet} from 'react-native'
import {React, useContext, useState} from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthPageTitle } from '../../components/AuthPageTitle'
import { AuthPageSubtitle } from '../../components/AuthPageSubtitle'

import AuthContent from './AuthContent'
import LoadingOverlay from '../../components/LoadingOverlay'
import { login } from '../../utils/auth'
import { AuthContext } from '../../store/context/auth-context'



export default function LoginScreen ()  {

  const [ isAuthenticating, setIsAuthenticating] =useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert('Authenticate Failed', "Please try again! Something went wrong...")
    }

    setIsAuthenticating(false);
    
    
  }
  console.log("isAuthenticating", isAuthenticating)
  if( isAuthenticating ){
    return <LoadingOverlay loadingMessage={"Logging you in..."}/>;
  }
 
  return (
   
    <SafeAreaView>
      <AuthContent isLogin onAuthenticate={loginHandler}/>
     {/*   <AuthPageTitle onPress={backPressHandler}/>
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



    <PrimaryButton
        buttonColor={Colors.black.default}
        children={"Summit"}
        buttonFontFamily={"Poppins_700Bold"}
        verticalMargin={"8%"}
       // onPress={}
  />*/}
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