import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { PlusButtonSection } from '../../components/PlusButtonSection'

const ShotScreen = () => {
  return (
    <SafeAreaView>
    <View>
      <Text>ShotScreen</Text>
      <PlusButtonSection/>
    </View>
    </SafeAreaView>
  )
}

export default ShotScreen

const styles = StyleSheet.create({})