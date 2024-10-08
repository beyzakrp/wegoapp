import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/colors'


function HeaderSections ({title})  {
  return (
    <View style={styles.headerOuterSection}>
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.line}/>
    </View>
  )
}

export default HeaderSections

const styles = StyleSheet.create({
    headerOuterSection: {
       
        //backgroundColor: Colors.blue[400],
        height: 24,
        width: 'auto',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 10,
        flexDirection: 'row',
        marginTop: '2%',
        marginBottom: '1.5%',


    },

    headerText: {
        fontFamily: 'Poppins_700Bold',
        color: Colors.black.default,
        fontSize:20,
    },

    line: {
        height:1,
        marginLeft: 8,
        backgroundColor: Colors.black.default,
        flex: 1,

    }
})