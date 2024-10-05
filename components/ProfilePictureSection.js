import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

function ProfilePictureSection ({profilePictureAddress}){
  return (
    <View style={styles.profilePictureOuterContainer}>
      <Image
      style={styles.profilePictureInnerContainer}  
      source={profilePictureAddress}
    
      ></Image>
    </View>
  )
}

export default ProfilePictureSection

const styles = StyleSheet.create({
    profilePictureOuterContainer: {
        
    },
    profilePictureInnerContainer: {
        width: 64,
        height: 64,
        borderRadius: 25,
    }
})