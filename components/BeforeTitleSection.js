import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Feather from "@expo/vector-icons/Feather";
import { Dimensions } from "react-native";
import Colors from '../constants/colors';



function BeforeTitleSection({name}){
  return (
    <View
    style={{
      justifyContent: "flex-start",
      alignItems: "flex-start",
    }}
  >
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/images/WhiteLogo.png")}
          resizeMode="contain"
          color={Colors.white.null}
        />
        <View style={styles.verticalLine}/>
        <Text style={styles.beforeText}>{name}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Feather name="bell" size={24} color="black" />
      </View>
    </View>
  </View>
  )
}

export default BeforeTitleSection

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    marginRight: 30,
    height: "auto",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: (deviceWidth + 18) / 2 - 100,
  },
  logo: {
    width: 73,
    height: 24,
  },
  iconContainer: {
    //justifyContent: 'center',
    //alignItems: 'center',
    //paddingRight: 30, // İkona sağdan biraz boşluk ekler
  },
  beforeText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    color: Colors.white.null,
  },

  verticalLine: {
    backgroundColor: Colors.white.null,
    width: 2,
    height: 30,
    marginHorizontal: 5

  }
});