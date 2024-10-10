import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import IconButtonSection from './IconButtonSection'
import LogoTitle from './LogoTitle'

export function AuthPageTitle  ()  {
  return (
    <View style={styles.titleOuter}>
      <IconButtonSection name={"chevron-back-outline"}
      size={32}/>
      <View style={{
        marginHorizontal: "33.5%",
        alignItems: 'center',
        justifyContent: 'center'
      }}>

        <LogoTitle/>
      </View>
      
    </View>
  )
}


const styles = StyleSheet.create({
    titleOuter: {
        marginVertical: "3%",
        marginHorizontal: "2%",
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }
})