import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';

function SwitchSection  ({ title, infoTrue, infoFalse}) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
        <View style={{ paddingRight: 10, justifyContent: 'center', alignItems:'center'}}>
        <Ionicons name={isEnabled ? 'lock-open-outline' : 'lock-closed-outline'} size={20} color={Colors.black[400]}/>
    </View>    
    <View>
    <Text style={styles.text}>{title}</Text>
    <Text style={styles.textBottom}>{isEnabled ? infoTrue : infoFalse}</Text>

    </View>
    </View>
    <View style={styles.switchContainer}>
      
      <Switch
        trackColor={{ false: Colors.black[200], true: Colors.blue[100] }}
        thumbColor={isEnabled ?  Colors.blue.default : Colors.black[100]}
        ios_backgroundColor= {Colors.white[200]}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  </View>
  )
}

export default SwitchSection
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 16
      },
      text: {
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        color: Colors.black[400]
      },
      textBottom: {
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        color: Colors.black.default
      },
      switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        
      },
})