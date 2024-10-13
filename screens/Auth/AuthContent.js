import { StyleSheet, Text, View, Alert } from 'react-native'
import {React, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import AuthForm from './AuthForm';
import LinkButton from "../../components/LinkButton";


export default function AuthContent ({ isLogin, onAuthenticate}) {
    const navigation = useNavigation();

  const [credentialIsValid, setCredentialIsValid] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  console.log("credentialIsValid: ", credentialIsValid);
  console.log("setCredentialIsValid: ", setCredentialIsValid);

  function switchAuthModelHandler (){
    if(isLogin) {
      navigation.replace('SignupScreen')
    } else{
      navigation.replace('LoginScreen')
    }
  }

  function submitHandler(credentials){
    let {email, password, confirmPassword } = credentials;

    email = email.trim();
    password =password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const passwordsAreEqual = (password === confirmPassword);

    if(!emailIsValid ||!passwordIsValid || (!isLogin &&!passwordsAreEqual)) {
      Alert.alert('Invalid input', 'Please check your entered credentials. ');
      setCredentialIsValid({
        email: !emailIsValid,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      console.log(!emailIsValid,!passwordIsValid , !isLogin ,!passwordsAreEqual);
      return;
    }
    onAuthenticate({email, password});
  }
  
  return (
    <View>
      <AuthForm
      isLogin={isLogin}
      onSubmit={submitHandler}
      credentialIsInvalid={credentialIsValid}/>

<LinkButton
        linkText={isLogin ? "Sign Up" : "Sign In"}
        normalText={ !isLogin ? "Already have an account?": "Create an account"}
        onPress={switchAuthModelHandler}
      />
    </View>


  )
}



const styles = StyleSheet.create({})