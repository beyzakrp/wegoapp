import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/colors'

function PrimaryButton ({children, onPress}) {
    /*function pressHandler() {
        console.log('Pressed!');
    }*/
  return (
    <View style={styles.buttonOuterContainer}>
        <Pressable 
            style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
            onPress={onPress} 
            android_ripple={{
                color: Colors.black.default,
            }}>
                <Text style={[styles.buttonText]}>
                    {children}
                </Text>
        </Pressable>
    </View>
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
        marginHorizontal: 16
    },

    buttonInnerContainer: {
        backgroundColor: Colors.blue.default,
        borderRadius: 20,
        paddingVertical: 16,
        paddingHorizontal: 16,
        elevation: 2,
     
    },
    buttonText: {
        color: Colors.white.null,
        textAlign: 'center',
        //fontWeight: 'bold',
        fontFamily: 'Poppins_700Bold',
        fontSize: 18,
    }


})