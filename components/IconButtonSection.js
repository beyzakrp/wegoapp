import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import Colors from '../constants/colors'

const IconButtonSection = () => {
  return (
    <View>
      <Feather name="user" size={24} color={Colors.black.default} />
    </View>
  )
}

export default IconButtonSection

const styles = StyleSheet.create({})