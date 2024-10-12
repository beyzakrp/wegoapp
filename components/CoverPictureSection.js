import { StyleSheet, View,Image, ImageBackground, Dimensions, Text } from 'react-native'
import React from 'react'
import ProfilePictureSection from './ProfilePictureSection'
import Colors from '../constants/colors'

function CoverPictureSection(){
  return (
    <View style={styles.coverPictureOuterContainer}>
      <View style={styles.coverPictureInnerContainer}>
        <ImageBackground
          source={require("../assets/images/defaultCoverPicture.jpg")}
          style={{
            flex: 1,
          }}
        ></ImageBackground>
      </View>

      <View style={{
        flexDirection: 'row'
      }}>
        <View style={styles.profilePagePicture}>
          <ImageBackground
            source={require("../assets/images/defaultProfilePicture.jpg")}
            style={{
              flex: 1,
            }}
          />
        </View>

        <View style={{
          flexDirection: 'row',
          flex:1,
          justifyContent: 'space-around',
          marginHorizontal: (deviceWidth/100)*1,
          marginVertical: (deviceHeigth/100)*0
        }}>

          <View style={{
            justifyContent: 'center',
            alignItems: 'center',

          }}>
            <Text style={styles.detailsTextNumber}>54</Text>
            <Text  style={styles.detailsTextTitle}>Event</Text>
          </View>

          <View style={{
            justifyContent: 'center',
            alignItems: 'center',

          }}>
            <Text style={styles.detailsTextNumber}>36</Text>
            <Text  style={styles.detailsTextTitle}>Shots</Text>
          </View>

          <View style={{
            justifyContent: 'center',
            alignItems: 'center',

          }}>
            <Text style={styles.detailsTextNumber}>207</Text>
            <Text  style={styles.detailsTextTitle}>Friends</Text>
          </View>


        </View>
      </View>
    </View>
  );
}

export default CoverPictureSection

const deviceWidth = Dimensions.get("window").width;
const deviceHeigth = Dimensions.get("window").height;

const styles = StyleSheet.create({
    coverPictureOuterContainer: {
        
        marginHorizontal: 16,

    },
    coverPictureInnerContainer:{
       
        height: (deviceHeigth/100)*10,
        borderBottomRightRadius: 16,
        borderTopRightRadius: 16,
        borderTopLeftRadius:16,
        
        overflow: 'hidden',


    },
    profilePagePicture: {
        borderRadius: 20,
        marginTop: -10,
        height: (deviceHeigth/100)*8,
        width: (deviceHeigth/100)*8,
        overflow: 'hidden',
        borderColor: Colors.white.deafult,
        borderWidth: 4

    },

    detailsTextNumber: {
      fontFamily: 'Poppins_700Bold',
              fontSize: 16,
              color: Colors.black.default,
    },

    detailsTextTitle: {
      fontFamily: 'Poppins_500Medium',
              fontSize: 12,
              color: Colors.black[300],
    }
   
})