import { StyleSheet, Pressable } from "react-native";
import React from "react";


import Ionicons from "@expo/vector-icons/Ionicons";

function IconButtonSection({ onPress, name, size, color }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
}

export default IconButtonSection;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
