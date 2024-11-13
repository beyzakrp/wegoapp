import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/colors'

function EventNameSection ({ title, onPress}) {
  return (
    <Pressable onPress={onPress}>
    <View style={styles.outer}>
      <Text style={styles.eventText}>{title}</Text>
    </View>
    </Pressable>
  )
}

export default EventNameSection

const styles = StyleSheet.create({
    outer: {
        marginHorizontal: 12,
        backgroundColor: Colors.black[200],

        marginBottom: 12,
        paddingHorizontal:20,
        paddingVertical:16,
        borderRadius: 12,
    },
     eventText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 13,
     }
})