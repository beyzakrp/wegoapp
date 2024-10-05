import { StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import InputSection from '../components/InputSection';
import InfoMessages from '../components/InfoMessages';
import DateInputSection from '../components/DateInputSection';
import ProfilePictureSection from '../components/ProfilePictureSection';
import CoverPictureSection from '../components/CoverPictureSection';
import IconButtonSection from '../components/IconButtonSection';
import EventCardSection from '../components/EventCardSection';
import EventGridTile from '../components/EventGridTile';

function SignInScreen () {
  return (
    <ScrollView style={styles.screen}>
        <KeyboardAvoidingView behavior='position'>
    <View style={styles.screen}>
        <EventGridTile></EventGridTile>
    <InputSection nameTag={"Maximum 12 digits allowed!"} maxDigits={3}>Password</InputSection>
    <InfoMessages>If you have a mail address from education, please type that one!</InfoMessages>
     <InputSection children='E-mail' nameTag="example@edu.tr"/>
     <DateInputSection></DateInputSection>
     <ProfilePictureSection profilePictureAddress={require('../assets/images/defaultProfilePicture.jpg')} ></ProfilePictureSection>
    <CoverPictureSection></CoverPictureSection>
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Sign In</PrimaryButton>
      <IconButtonSection></IconButtonSection>
      <InputSection children='Username' nameTag={'@example'} />
      <EventCardSection></EventCardSection>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default SignInScreen;

const styles = StyleSheet.create({
    screen: {

    }
});