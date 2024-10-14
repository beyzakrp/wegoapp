import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import Colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import IconButtonSection from "../components/IconButtonSection";

const deviceWidth = Dimensions.get("window").width;
const deviceHeigth = Dimensions.get("window").height;

export default function IntroTwoScreen({ navigation }) {
  function pressHandler() {
    navigation.navigate("SignupScreen");
  }
  return (
    <View
      style={{
        backgroundColor: Colors.blue.default,
        justifyContent: 'space-between', 
        flex: 1,
      }}
    >
      <View
        style={{
          width: "100%",
          height: deviceHeigth / 2.5,
          justifyContent: "flex-end",
          alignItems: "flex-end",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: (3 * deviceWidth) / 4,
            height: "100%",
          }}
        >
          <Image
            source={require("../assets/images/PartiesUpII.png")}
            resizeMode="cover"
            style={{ height: "100%", width: "100%" }}
          />
        </View>
      </View>

          <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            }}>
            <Text style={{
              fontFamily: 'Poppins_800ExtraBold',
              fontSize: 24,
              color: Colors.black.default,
              paddingRight: 16
              
            }} >
              Let's Explore! 
            </Text>
            <IconButtonSection name={"arrow-forward"} size={48} color={Colors.black.default} onPress={pressHandler}/>

          </View>
      <View
        style={{
          width: "100%",
          height: deviceHeigth / 2.46,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: (3 * deviceWidth) / 4,
            height: "100%",
          }}
        >
          <Image
            source={require("../assets/images/ShowsBottomII.png")}
            resizeMode="cover"
            style={{ height: "100%", width: "100%" }}
          />
        </View>
      </View>





    </View>
  );
}

const styles = StyleSheet.create({});
