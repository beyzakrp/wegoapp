import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../constants/colors'
import DateTimePicker from '@react-native-community/datetimepicker';

export default function TicketInput ({ children, inputPlaceholder }) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
      
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
  return (
    <View style={styles.outer}>
      <Text style={styles.title} children={children}/>
        <View style={styles.inputOuter}>
            <View style={styles.inputInner}>
            <TextInput placeholder={inputPlaceholder} keyboardType=''/>
      </View>

        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    outer: {
        marginTop: 8
    },
    title: {
        marginBottom: 8,
        fontFamily: "Poppins_400Regular",
        color: Colors.black[400],
    },
    inputOuter: {
        backgroundColor: Colors.white[100],
       
        borderRadius: 26,
       
    },
    inputInner: {
        paddingHorizontal:30,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
    }
})