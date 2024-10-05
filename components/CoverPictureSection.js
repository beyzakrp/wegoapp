import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import ProfilePictureSection from './ProfilePictureSection'
import Colors from '../constants/colors'

function CoverPictureSection(){
  return (
    <View style={styles.coverPictureOuterContainer}>
      <Image
      source={require('../assets/images/defaultCoverPicture.jpg')}
      style={styles.coverPictureInnerContainer}
      ></Image>
      <View style={styles.profilePagePicture}>
        <ProfilePictureSection 
   
        profilePictureAddress={require('../assets/images/defaultProfilePicture.jpg')} size={1}></ProfilePictureSection>
      </View>
    </View>
  )
}

export default CoverPictureSection

const styles = StyleSheet.create({
    coverPictureOuterContainer: {
        
        marginHorizontal: 16,

    },
    coverPictureInnerContainer:{
        height: 80,
        width: 'auto',
        borderBottomRightRadius: 16,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,


    },
    profilePagePicture: {
        borderColor: Colors.white.null,
        borderWidth: 4,
        borderRadius: 28,
        marginTop: -20,
        height: 72,
        width: 72,

    },
   
})