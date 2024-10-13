import { StyleSheet, View } from "react-native";
import React from "react";
import IconButtonSection from "./IconButtonSection";
import LogoTitle from "./LogoTitle";

export function AuthPageTitle({ onPress, noGoBack }) {
  return (
    <View
      style={{
        marginVertical: "3%",
        marginHorizontal: noGoBack ? 0 : "2%",
        flexDirection: "row",
        justifyContent: noGoBack ? "center" : "flex-start",
      }}
    >
      {!noGoBack && (
        <IconButtonSection
          name={"chevron-back-outline"}
          size={32}
          onPress={onPress}
        />
      )}
      <View
        style={{
          marginHorizontal: "33.5%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LogoTitle />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleOuter: {},
});
