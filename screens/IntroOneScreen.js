import { StyleSheet, Text, View, Image, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
import Colors from '../constants/colors'
import { Ionicons } from '@expo/vector-icons';
import IconButtonSection from '../components/IconButtonSection';

export default function IntroOneScreen ({navigation}) {
    function pressHandler() {
        navigation.navigate('IntroTwo')
    }
  return (
    <View style={{
        backgroundColor: Colors.blue.default,
       
        flex:1,
        justifyContent: 'space-between'
    }}>
    <View style={{
        backgroundColor: Colors.white.null,
        paddingTop: deviceHeigth*0.1,
        height: '100%',
        justifyContent: 'space-between',
        borderBottomRightRadius: 500
        
    }}>
        <View style={styles.imageInnerUpper}>
            <Image source={require('../assets/images/ConcertsUpI.png')} resizeMode='contain' style={{width: '100%', height: '100%'}} />
        </View>

        <View style={styles.imageInnerBottom}>
            <Image source={require('../assets/images/WorkshopBottomI.png')} resizeMode='contain' style={{width: '100%', height: '100%'}} />
        </View>

        <View style={{
        
     alignItems: 'flex-end',
       
        paddingBottom: 30,
        paddingRight: 20,
   }}>
            <IconButtonSection name='arrow-forward' size={48} color={Colors.black.default} onPress={pressHandler}/>
        </View>

     
    </View>
    </View>
  )
}

const deviceWidth = Dimensions.get('screen').width;
const deviceHeigth = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    imageInnerUpper: {
        width: (deviceWidth*0.6),
        height: deviceHeigth*0.4,
        flexDirection: 'row',
        alignItems:'flex-end',
        marginLeft: deviceWidth-(deviceWidth*0.6)
    },

    imageInnerBottom: {
        width: (deviceWidth*0.6),
        height: deviceHeigth*0.4,
        flexDirection: 'row',
        alignItems:'flex-start',
        
    }
})