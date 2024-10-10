import { StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'

export function AuthPageSubtitle ({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        marginHorizontal: "5%",
        marginBottom: "3%",
        marginTop: ""
    },
    titleText: {
        fontFamily: "Poppins_700Bold",
        fontSize: 30
        
    }
})