import { Pressable, StyleSheet,  View } from 'react-native'
import React from 'react'
import AfterCardSection from './AfterCardSection'

function AfterGridTile ({title, profileImage, username, eventImage}) {
  return (
    <View>
      <Pressable>
        <AfterCardSection
            title={title}
            profileImage={profileImage}
            username={username}
            eventImage={eventImage}
        ></AfterCardSection>
      </Pressable>
    </View>
  )
}

export default AfterGridTile

const styles = StyleSheet.create({})