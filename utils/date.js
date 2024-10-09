import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export function getFormattedDate(date) {
  return (
    `${date.getFullYear()}/${date.getMonth() +1}/${date.getDate()}`
  )
}


const styles = StyleSheet.create({})