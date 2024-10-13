import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import React from "react";
import Colors from "../constants/colors";

function LoadingOverlay({ loadingMessage }) {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      resizeMode="contain"
      source={require("../assets/splash.png")}
    >
      <View style={styles.outer}>
        <ActivityIndicator size={"large"} color={Colors.blue.default} />
        <Text children={loadingMessage} />
      </View>
    </ImageBackground>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    marginTop: "20%",
  },
});
