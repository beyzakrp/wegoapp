import { StyleSheet, Text, View } from 'react-native'
import {React, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import AuthForm from './AuthForm';

export default function AuthContent ({ onAuthhenticate}) {
    const navigation = useNavigation();

  const [credentialIsValid, setCredentialIsValid] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  function submitHandler(credentials){
    let {email, password,passwordConfirm } = credentials;

    email = email.trim();
    password =password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const passwordsAreEqual = (password === confirmPassword);

    if(!emailIsValid ||!passwordIsValid) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialIsValid({
        email: !emailIsValid,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({email, password});
  }
  
  return (
    <View>
      <AuthForm
      onSubmit={submitHandler}
      credentialIsInvalid={credentialIsValid}/>
    </View>
  )
}



const styles = StyleSheet.create({})