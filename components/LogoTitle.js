import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import Colors from "../constants/colors";
import { Dimensions } from "react-native";

function LogoTitle() {
  return (
    <Image
      style={[{width: 75, height: 24}]}
      source={require("../assets/images/wegoBlackLogo.png")}
    />
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  logo: {
    width: 75,
    height: 24,
  },
});

export default LogoTitle;
