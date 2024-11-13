import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import SignInScreen from "../SignInScreen";
import ProfilePictureSection from "../../components/ProfilePictureSection";
import CoverPictureSection from "../../components/CoverPictureSection";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { FollowButton } from "../../components/FollowButton";
import IconButtonSection from "../../components/IconButtonSection";
import { AuthContext } from "../../store/context/auth-context";
import LogoTitle from "../../components/LogoTitle";

export function ProfileScreen() {
  const authCtx = useContext(AuthContext);

  const deviceWidth = Dimensions.get("window").width;

  return (
    <>
      <SafeAreaView>
        <View
          style={{
            marginVertical: "3%",
            marginHorizontal: "4%",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: (deviceWidth * 1.6) / 3,
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LogoTitle />
            </View>

            <IconButtonSection
              name={"exit-outline"}
              size={32}
              onPress={authCtx.logout}
              color={Colors.black[300]}
            />
          </View>
        </View>

        <CoverPictureSection />

        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
            }}
          >
            @andreiiistifness
          </Text>
          <FollowButton />
        </View>

        <View
          style={{
            flexDirection: "row",
            width: deviceWidth / 2,
            marginHorizontal: 20,
            justifyContent: "space-between",
            marginVertical: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "Poppins_400Regular"}}>
            ITU - Astronautical Engineering
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

export default ProfileScreen;
const deviceWidth = Dimensions.get("window").width;
const deviceHeigth = Dimensions.get("window").height;

const styles = StyleSheet.create({
  followOuter: {
    borderWidth: 1,
    borderColor: Colors.blue.default,
    borderRadius: 8,
    backgroundColor: Colors.white.null,
  },

  followInner: {
    paddingHorizontal: (deviceWidth / 100) * 4,
    paddingVertical: (deviceHeigth / 100) * 0.5,
    color: Colors.blue.default,
    fontFamily: "Poppins_700Bold",
  },

  requestSendOuter: {
    borderWidth: 1,
    borderColor: Colors.blue.default,
    borderRadius: 8,
    backgroundColor: Colors.blue.default,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: (deviceWidth / 100) * 2,
    paddingVertical: (deviceHeigth / 100) * 0.5,
  },
  requestSendInner: {
    color: Colors.white.null,
    fontFamily: "Poppins_700Bold",
    paddingRight: (deviceWidth / 100) * 2,
  },
});
