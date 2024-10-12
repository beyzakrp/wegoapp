import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { PlusButtonSection } from '../../components/PlusButtonSection'
import { SignUpSectionProfileInfo } from '../Auth/SignUpScreen'

const ShotScreen = () => {
  return (
    <SafeAreaView>
    <SignUpSectionProfileInfo/>
    </SafeAreaView>
  )
}

export default ShotScreen

const styles = StyleSheet.create({})