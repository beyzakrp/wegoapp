import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function InfoMessages({children}){
  return (
    <View style={styles.infoOuterContainer}>
      <Text style={styles.infoInnerContainer}>{children}</Text>
    </View>
  )
}

export default InfoMessages

const styles = StyleSheet.create({
    infoOuterContainer: {
        marginHorizontal: 16,
    },

    infoInnerContainer: {
        color: '#b0b0b0',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        fontFamily: 'Poppins_400Regular',
        fontSize: 15,
    }
})