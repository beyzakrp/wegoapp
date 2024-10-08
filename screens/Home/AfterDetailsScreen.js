import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function AfterDetailsScreen  ({route, navigation}) {
  return (
    <View>
      <Text>AfterDetailsScreen</Text>
      <Text>{route.params.afterTitle}</Text>
    </View>
  )
}

export default AfterDetailsScreen

const styles = StyleSheet.create({})