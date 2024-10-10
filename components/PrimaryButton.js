import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/colors";

function PrimaryButton({ children, onPress, buttonColor, buttonFontFamily, verticalMargin }) {
  /*function pressHandler() {
        console.log('Pressed!');
    }*/
  return (
    <View style={[styles.buttonOuterContainer, { marginVertical: verticalMargin }]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : [styles.buttonInnerContainer, { backgroundColor: buttonColor }]
        }
        onPress={onPress}
        android_ripple={{
          color: Colors.black.default,
        }}
      >
        <Text style={[styles.buttonText, { fontFamily: buttonFontFamily }]}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
} 

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    marginHorizontal: 16,
  },

  buttonInnerContainer: {
    borderRadius: 18,
    paddingVertical: 20,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: Colors.white.null,
    textAlign: "center",

    fontSize: 16,
  },
});
