import { StyleSheet, Text, View, Image,Button } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import Colors from "../constants/colors";
import { Dimensions } from "react-native";

function UpperLogoBarSection () {
  return (
    <View
      style={{
        justifyContent: "flex-end",
        alignItems: "flex-end",
      }}
    >
      
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/images/wegoBlackLogo.png")}
            resizeMode="contain"
          />
        </View>
        <View style={styles.iconContainer}>
          <Feather name="bell" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    marginRight: 30,
    height: "auto",
  },
  logoContainer: {
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
});

export default UpperLogoBarSection;
