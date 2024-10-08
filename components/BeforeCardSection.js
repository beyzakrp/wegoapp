import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import Colors from '../constants/colors'

function BeforeCardSection({profileImage, username, title, onPress}) {
  return (
    <View style={styles.outerSection}> 
    <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
    <View style={styles.profileOuterSection}>
        <Image style ={styles.profilePic} 
            //source={ {uri: profileImage}}
           source={{uri:  profileImage  }}/>
                </View>
                <View style={styles.textSection}>
      <Text
       style={styles.eventTitleText}
       >{title}</Text>
       <Text style={styles.usernameText}>{username}</Text>
       </View>
       </Pressable>
    </View>
  )
}

export default BeforeCardSection

const styles = StyleSheet.create({
    outerSection: {
        width:78,
        height: 'auto',
        marginLeft: 6,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    profileOuterSection: {
        width: 75,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white.null,
        borderColor: Colors.blue.default,
        borderRadius: 27,
        borderWidth: 3,
    },

    profilePic: {
        width:64,
        height: 64,
        borderRadius: 22,
    },

    eventTitleText: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 10,
        marginVertical: 0,
        justifyContent: 'center',
        alignItems: 'center'

    },

    usernameText: {
        fontFamily: 'Poppins_400Regular',
        fontSize:11,
        color: Colors.black[400],
        justifyContent: 'center',
        alignItems: 'center'
    },

    textSection: {
        //marginTop:5
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
    },
    button: {
        flex: 1,
      },
      buttonPressed: {
        opacity: 0.5,
      },

})