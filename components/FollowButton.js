import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import React from "react";
import Colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const deviceWidth = Dimensions.get("window").width;
const deviceHeigth = Dimensions.get("window").height;

export function FollowButton() {

const noFollow = false;
  


  return (
    <>
      {noFollow && (
        <Pressable onPress={() => { noFollow == true}}>
        <View
          style={{
            borderWidth: 1,
            borderColor: Colors.blue.default,
            borderRadius: 8,
            backgroundColor: Colors.white.null,
          }}
        >
          <Text
            style={{
              paddingHorizontal: (deviceWidth / 100) * 4,
              paddingVertical: (deviceHeigth / 100) * 0.5,
              color: Colors.blue.default,
              fontFamily: "Poppins_700Bold",
            }}
          >
            Follow
          </Text>
        </View>
        </Pressable>
      )}

      {0 == 1 && (
         <Pressable >
        <View
          style={{
            borderWidth: 1,
            borderColor: Colors.blue.default,
            borderRadius: 8,
            backgroundColor: Colors.blue.default,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: (deviceWidth / 100) * 2,
            paddingVertical: (deviceHeigth / 100) * 0.5,
          }}
        >
          <Text
            style={{
              color: Colors.white.null,
              fontFamily: "Poppins_700Bold",
              paddingRight: (deviceWidth / 100) * 2,
            }}
          >
            Request Sent
          </Text>

          <Ionicons name="checkmark" color={Colors.white.null} size={20} />
        </View>
        </Pressable>
      )}

      {!noFollow && (
         <Pressable onPress={() => { noFollow == false}}>
        <View
          style={{
            borderWidth: 1,
            borderColor: Colors.blue.default,
            borderRadius: 8,
            backgroundColor: Colors.blue.default,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: (deviceWidth / 100) * 2,
            paddingVertical: (deviceHeigth / 100) * 0.5,
          }}
        >
          <Text
            style={{
              color: Colors.white.null,
              fontFamily: "Poppins_700Bold",
              paddingRight: (deviceWidth / 100) * 2,
            }}
          >
            Following
          </Text>

          <Ionicons name="checkmark-done" color={Colors.white.null} size={20} />
        </View>
        </Pressable>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
