import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputSection from './InputSection'
import InfoMessages from './InfoMessages'
import PrimaryButton from './PrimaryButton'
import Colors from '../constants/colors'
import { AuthPageTitle } from './AuthPageTitle'
import { AuthPageSubtitle } from './AuthPageSubtitle'
import { CodeInputSection } from './CodeInputSection'
import DateInputSection from './DateInputSection'

export function SignUpSectionEmail ()  {
  return (
    <>
    <AuthPageTitle/> 

    <AuthPageSubtitle children={"Sign up"}/>

    <InputSection 
    children={"E-mail"}
    inputKeyboardType= {"number-pad"}
    nameTag={"example@example.com"}
    isInfoMessage={true}
    infoMessage={"If you want to notificate for your university event, please sign in with your .edu mail address."}

    />

    <PrimaryButton 
    children={"Continue"}
    buttonColor={Colors.blue.default}
    onPress={console.log("Email continue button tapped")}
    buttonFontFamily={"Poppins_700Bold"}
    verticalMargin={"8%"}
    />
  
    </>
  )
}

export function SignUpSectionPhone (){
    return (
        <>
        <AuthPageTitle />
    <AuthPageSubtitle children={"Confirm Phone Number"}/>
    <InputSection 
    children={"Phone Number"}
    inputKeyboardType= {"number-pad"}
    nameTag={"xxx xxx xx xx"}
    isInfoMessage={true}
    infoMessage={"If you want to notificate for your university event, please sign in with your .edu mail address."}
    
    />

<PrimaryButton 
    children={"Continue"}
    buttonColor={Colors.blue.default}
    onPress={console.log("Email continue button tapped")}
    buttonFontFamily={"Poppins_700Bold"}
    verticalMargin={"8%"}
    />
        </>
    )
}

export function SignUpSectionCode (){
    return (
        <>
           <AuthPageTitle />
    <AuthPageSubtitle children={"Enter Code"}/>
    <CodeInputSection/>
        </>
    )
}

export function SignUpSectionProfileInfo() {
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
            <View style={styles.inputInner }  >
                 <InputSection  children={"Name"} />
            </View>
            <View style={styles.inputInner }  >
                 <InputSection  children={"Surname"} />
            </View>
         
   
        </View>
        <InputSection children={"Username"}/>
        <DateInputSection/>
        <InputSection children={"Password"}/>
        <InputSection children={"Password Confirm"}/>

        <PrimaryButton buttonColor={Colors.black.default} children={"Summit"} buttonFontFamily={"Poppins_700Bold"} verticalMargin={"8%"}/>
              </>
    );
}

const styles = StyleSheet.create({
    inputInner: {
        flex:1,
        justifyContent: 'center',
        marginHorizontal:-10,
    }
})