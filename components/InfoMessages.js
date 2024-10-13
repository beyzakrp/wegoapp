import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/colors'

function InfoMessages({children}){
  const isInvalid = 0;
  return (
    <View style={styles.infoOuterContainer}>
      <Text style={[styles.infoInnerContainer, isInvalid && styles.errorMessage]}>{children}</Text>
    </View>
  )
}

export default InfoMessages

const styles = StyleSheet.create({
  errorMessage:{
    color: Colors.error.primary,
  },
    infoOuterContainer: {
        marginHorizontal: 16,
        paddingBottom: 16,
    },

    infoInnerContainer: {
        color: Colors.black[300],
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        fontFamily: 'Poppins_400Regular',
        fontSize: 13,
    }
})