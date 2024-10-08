import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import Colors from '../constants/colors';

function IconButtonSection ({onPress, name, size, color}) {
  return (
    <Pressable onPress={onPress} style={{paddingHorizontal:10}}>
      <Feather name={name} size={size} color={color} />
    </Pressable>
  )
}

export default IconButtonSection

const styles = StyleSheet.create({})