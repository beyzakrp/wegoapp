import { StyleSheet,  View } from 'react-native'
import {React, useState} from 'react'
import InputSection from './InputSection'

const DateInputSection = () => {
    const [enteredNumber, setEnteredNumber]= useState('');
  return (
    <View style={styles.dateInputOuterContainer} >
      <View style={styles.dateInputInnerContainer}>
        <InputSection 
        maxDigits={2}
        inputKeyboardType={'number-pad'}
        nameTag={'xx'}
        >Day</InputSection>
      </View>
      <View style={styles.dateInputInnerContainer}>
        <InputSection 
        maxDigits={10}
        inputKeyboardType={'default'}
        nameTag={'October'}
        >Month</InputSection>
      </View>
      <View style={styles.dateInputInnerContainer}>
        <InputSection 
        maxDigits={4}
        inputKeyboardType={'number-pad'}
        nameTag={'xxxx'}
        >Year</InputSection>
      </View>
    </View>
  )
}

export default DateInputSection

const styles = StyleSheet.create({
    dateInputOuterContainer: {
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        

    },
    dateInputInnerContainer: {
        justifyContent: 'center',
        flex: 1,
        marginHorizontal: -10,
    }
})