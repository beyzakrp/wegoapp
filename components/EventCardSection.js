import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";

import Colors from "../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LikedContext } from "../store/context/liked-context";
import { useContext, useLayoutEffect } from "react";
import IconButtonSection from "./IconButtonSection";

function EventCardSection({
  id,
  title,
  profileImage,
  username,
  reminder,
  eventImage,
  fullCapacity,
  enrolled,
  onPress,

  description,
  date,
  hour,
  location,
  participants,
}) {
  const capacityPercentage =
    fullCapacity && enrolled ? (enrolled / fullCapacity) * 100 : 0;
  const validCapacityPercentage = isNaN(capacityPercentage)
    ? 0
    : capacityPercentage;

  function likeButtonHandler() {
    console.log("Liked the event!");
  }

  return (
    <View style={styles.eventOuterSection}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.imageOuterSection}>
          <ImageBackground
            resizeMode="cover"
            style={{
              flex: 1,
              alignContent: "flex-end",
              justifyContent: "flex-end",
            }}
            source={{ uri: eventImage }}
            onLoad={() => console.log("Image loaded successfully")}
            onError={(error) =>
              console.log("Image load error:", error.nativeEvent.error)
            }
          >
            <View
              style={{
                margin: 8,
                height: 12,
                width: "auto",
                backgroundColor: Colors.white.null,
                borderRadius: 6,
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <View
                style={{
                  height: 12,
                  backgroundColor: Colors.blue.default,
                  borderRadius: 6,
                  width: `${validCapacityPercentage}%`,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    height: 12,
                    justifyContent: "space-around",
                    flexDirection: "row",
                  }}
                >
                  <Ionicons name="people" size={10} color={Colors.white.null} />
                  <Text
                    style={{
                      fontFamily: "Poppins_700Bold",

                      fontSize: 10,
                      color: Colors.white.null,
                    }}
                  >
                    {enrolled}/{fullCapacity}
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </Pressable>
      <Text style={styles.titleOuterSection}>{title}</Text>

      <View style={styles.infoOuterSection}>
        <View style={styles.infoInnerSection}>
          <Image style={styles.profilePic} source={{ uri: profileImage }} />
          <View style={styles.infoTextInner}>
            <Text style={styles.usernameText}>{username}</Text>
            <Text style={styles.daysReminderText}>{reminder} days left</Text>
          </View>
        </View>
        <View style={styles.heartIcon}>
          <IconButtonSection
            name="heart-outline"
            size={24}
            color={Colors.black[300]}
            onPress={likeButtonHandler}
          />
        </View>
      </View>
    </View>
  );
}

export default EventCardSection;

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  eventOuterSection: {
    flex: 2,
    backgroundColor: Colors.black[200],
    borderRadius: 20,
    padding: 12,
    margin: 5,
  },

  imageOuterSection: {
    height: 140,
    width: "auto",
    borderRadius: 8,
    overflow: "hidden",
  },

  capacityBarOuter: {},

  capacityBarInner: {},
  titleOuterSection: {
    fontSize: 15,
    fontFamily: "Poppins_700Bold",
    marginVertical: 6,
    color: Colors.black.default,
  },

  infoOuterSection: {
    flexDirection: "row",
    justifyContent: "justify-content",
  },
  infoInnerSection: {
    flexDirection: "row",
    flex: 1,
    //justifyContent: 'space-around'
  },
  infoTextInner: {
    marginLeft: 5,
    alignContent: "center",
    justifyContent: "center",
  },

  usernameText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 11,
  },
  daysReminderText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 10,
    color: Colors.black[300],
  },

  profilePic: {
    //flex:1,
    width: 38,
    height: 38,
    borderRadius: 10,
  },

  heartIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
});
