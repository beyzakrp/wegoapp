import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import Colors from "../constants/colors";

export default function LinkButton({ onPress, linkText, normalText }) {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text children={normalText} style={styles.normalTextInner} />
        <Pressable onPress={onPress}>
          <Text style={styles.textInner} children={linkText} />
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  textInner: {
    fontFamily: "Poppins_700Bold",
    color: Colors.blue.default,
    textDecorationLine: "underline",
  },
  normalTextInner: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    paddingHorizontal: "1%",
  },
});
