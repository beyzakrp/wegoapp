import { StyleSheet,  Image } from "react-native";
import React from "react";
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
