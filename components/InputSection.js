import { StyleSheet, TextInput, View, Text } from 'react-native'
import {React, useState}  from 'react'
import Colors from '../constants/colors'


function InputSection({children ,nameTag, maxDigits, inputKeyboarType}) {
 /* const [enteredNumber, setEnteredNumber] = useState('');
   function numberInputHandler(enteredNumber){
        setEnteredNumber(enteredSet);
       
         } 
        */

    return (
    <View style={styles.inputOuterContainer}>
        <TextInput 
    //value={}
    //onChangeText={numberInputHandler}
    style={styles.inputInnerContainer}
    maxLength={maxDigits} 
    keyboardType= {inputKeyboarType}
    autoCapitalize='none'
    autoCorrect={false}
    placeholder={nameTag}
    />
        <View style={styles.nameTagOuterContainer}>
            <Text style={styles.nameTagInnerContainer}>{children}</Text>
            </View>

</View>
  )
}

export default InputSection;

const styles = StyleSheet.create({
    nameTagOuterContainer: {
        marginTop: -75,
        marginLeft: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    nameTagInnerContainer:{
    
        backgroundColor: Colors.white.null,
        paddingRight: 5,
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,

        
       /* shadowColor: '#000',       // Gölgenin rengi
        shadowOffset: { width: 0, height: 2 },  // Gölgenin yatay ve dikey pozisyonu
        shadowOpacity: 0.25,       // Gölgenin opaklığı
        shadowRadius: 3.84,        // Gölgenin yayılma alanı (bulanıklık)*/
        
    },
    inputOuterContainer: {
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: Colors.white.null,
        borderRadius: 16,
        marginTop:0,
        marginBottom: 45,
        marginHorizontal: 16,
        //elevation: 8, // For Android Shadow
        // Under that line about IOS Shadow
       /* shadowColor: 'black',
        shadowOffset: {
            width:0,
            height:2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        // Until there...
        */
    },

    inputInnerContainer: {
        height: 50,
        fontSize: 18,
        borderColor: Colors.black.default,
        borderWidth: 0.5,
        borderRadius: 16,
        color: Colors.black.default,
        marginVertical: 18,
        paddingHorizontal: 16,
        textAlign: "flex-start",
        placeholderTextColor: Colors.black[300],
        fontFamily: 'Poppins_400Regular'
    },

    pressed: {
        opacity: 0.75,
    },

})