import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import Colors from "../constants/colors";

export function CodeInputSection() {
  return (
    <View style={styles.outerContainer}>
      <TextInput
        style={styles.innerContainer}
        maxLength={1}
        keyboardType="number-pad"
      ></TextInput>
      <TextInput
        style={styles.innerContainer}
        maxLength={1}
        keyboardType="number-pad"
      ></TextInput>
      <TextInput
        style={styles.innerContainer}
        maxLength={1}
        keyboardType="number-pad"
      ></TextInput>
      <TextInput
        style={styles.innerContainer}
        maxLength={1}
        keyboardType="number-pad"
      ></TextInput>
      <TextInput
        style={styles.innerContainer}
        maxLength={1}
        keyboardType="number-pad"
      ></TextInput>
      <TextInput
        style={styles.innerContainer}
        maxLength={1}
        keyboardType="number-pad"
      ></TextInput>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;
const deviceHeigth = Dimensions.get("window").height;

const styles = StyleSheet.create({
  outerContainer: {
    marginHorizontal: deviceWidth / 15,
    height: deviceHeigth / 13,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  innerContainer: {
    height: "100%",
    width: deviceWidth / 8,
    paddingLeft: deviceWidth / 20,
    borderColor: Colors.white[200],
    borderWidth: 1,
    borderRadius: 15,
  },
});
