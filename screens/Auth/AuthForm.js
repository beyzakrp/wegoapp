import { StyleSheet, Text, View } from "react-native";
import { React, useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputSection from "../../components/InputSection";
import InfoMessages from "../../components/InfoMessages";
import PrimaryButton from "../../components/PrimaryButton";
import Colors from "../../constants/colors";
import { AuthPageTitle } from "../../components/AuthPageTitle";
import { AuthPageSubtitle } from "../../components/AuthPageSubtitle";
import { CodeInputSection } from "../../components/CodeInputSection";
import DateInputSection from "../../components/DateInputSection";
import LinkButton from "../../components/LinkButton";
import { useNavigation } from "@react-navigation/native";

 

export default function AuthForm({  onSubmit, credentialIsInvalid }) {
  const navigation = useNavigation();

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const {
    email: emailIsInvalid,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialIsInvalid

  function updateInputValueHandler( inputType, enteredValue) {
    switch(inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      
      case 'password': 
        setEnteredPassword(enteredValue);
        break;

      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

 

  function pressHandler() {
    navigation.navigate("LoginScreen");
  }

  function backPressHandler() {
    navigation.goBack();
  }



  //SIGN UP EMAİL SCREEN
  return (
    <>
      <AuthPageTitle onPress={backPressHandler} />

      <AuthPageSubtitle children={"Sign Up"} />

      <InputSection
        children={"E-mail"}
        inputKeyboardType={"email-address"}
        nameTag={"example@example.com"}
        value={enteredEmail}
        isInvalid={emailIsInvalid}
        isInfoMessage={true}
        onUpdateValue={updateInputValueHandler.bind(this, 'email')}
        infoMessage={
          "If you want to notificate for your university event, please sign in with your .edu mail address."
        }
      />
      <InputSection 
        children={"Password"}
        onUpdateValue={updateInputValueHandler.bind(this, 'password')}
        secure
        value={enteredPassword}
        isInvalid={passwordIsInvalid}
         />
      <InputSection 
      children={"Password Confirm"}
      onUpdateValue={updateInputValueHandler.bind(this, 'confirmPassword')} 
      secure
      value={enteredConfirmPassword}
      isInvalid={passwordsDontMatch}
      />

      <PrimaryButton
        children={"Continue"}
        buttonColor={Colors.blue.default}
        onPress={submitHandler}
        buttonFontFamily={"Poppins_700Bold"}
        verticalMargin={"8%"}
      />

      <LinkButton
        linkText={"Sign In"}
        normalText={"Already have an account?"}
        onPress={pressHandler}
      />
   </>
  );
}

export function SignUpSectionPhone() {
  //SIGN UP WITH PHONE SCREEN
  return (
    <>
      <AuthPageTitle />
      <AuthPageSubtitle children={"Confirm Phone Number"} />
      <InputSection
        children={"Phone Number"}
        inputKeyboardType={"number-pad"}
        nameTag={"xxx xxx xx xx"}
        isInfoMessage={true}
        infoMessage={
          "If you want to notificate for your university event, please sign in with your .edu mail address."
        }
      />

      <PrimaryButton
        children={"Continue"}
        buttonColor={Colors.blue.default}
        onPress={console.log("Email continue button tapped")}
        buttonFontFamily={"Poppins_700Bold"}
        verticalMargin={"8%"}
      />
    </>
  );
}

export function SignUpSectionCode() {
  //CONFIRM YOUR PHONE NUMBER CODE PAGE
  return (
    <>
      <AuthPageTitle />
      <AuthPageSubtitle children={"Enter Code"} />
      <CodeInputSection />
    </>
  );
}

export function SignUpSectionProfileInfo() {
  // SIGN UP PROFILE INFORMATION SCREEN
  return (
    <>
      <AuthPageTitle />
      <AuthPageSubtitle children={"Create Your Profile"} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 16,
        }}
      >
        <View style={styles.inputInner}>
          <InputSection children={"Name"} />
        </View>
        <View style={styles.inputInner}>
          <InputSection children={"Surname"} />
        </View>
      </View>
      <InputSection children={"Username"} />
      <DateInputSection />
      

      <PrimaryButton
        buttonColor={Colors.black.default}
        children={"Summit"}
        buttonFontFamily={"Poppins_700Bold"}
        verticalMargin={"8%"}
      />
    </>
  );
}

const styles = StyleSheet.create({
  inputInner: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: -10,
  },
});