import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/colors'

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
        color: Colors.black[300],
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
    }
})