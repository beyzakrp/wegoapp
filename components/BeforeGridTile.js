import { Pressable, StyleSheet,  View } from 'react-native'
import React from 'react'
import BeforeCardSection from './BeforeCardSection'

function BeforeGridTile ({title, profileImage, username}) {
  return (
    <View>
      <Pressable>
        <BeforeCardSection
            title={title}
            profileImage={profileImage}
            username={username}
        ></BeforeCardSection>
      </Pressable>
    </View>
  )
}

export default BeforeGridTile

const styles = StyleSheet.create({})