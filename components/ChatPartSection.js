import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import Colors from "../constants/colors";
import ProfilePictureSection from "./ProfilePictureSection";

export function ChatPartSection({ id, title, eventImage, description,time, notificationNumber, strike, reminder }) {
    const isFirst = (strike == 0)
    const isToday = (reminder == 0)
    const isNotificate = (notificationNumber == 0)
  return (
    <View style={styles.outerSection}>
      <View
        style={{
          height: (deviceHeigth / 100) * 9,
          width: (deviceHeigth / 100) * 9,
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        <ImageBackground
          style={{
            flex: 1,
            alignContent: "flex-end",
            justifyContent: !isFirst ? "space-between" : "flex-end",
          }}
          source={{
            uri: eventImage,
          }}
        >

          {!isFirst && (<View
            style={{
              marginHorizontal: 5,
              marginVertical: 5,
              height: 20,
              width: 20,
              backgroundColor: Colors.orange.default,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: Colors.white.deafult,
                fontFamily: "Poppins_700Bold",
                fontSize: 10,
              }}
            >
              x{strike}
            </Text>
          </View>)}

          <View
            style={{
              height: 20,
              width: "auto",
              backgroundColor: isToday ? Colors.white.deafult : Colors.blue.default,
              borderRadius: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {!isToday && (<Text
              style={{
                color: Colors.black.default,
                fontFamily: "Poppins_600SemiBold",
                fontSize: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Last {reminder} days
            </Text>)}

            {isToday && (<Text
              style={{
                color: Colors.orange.default,
                fontFamily: "Poppins_700Bold",
                fontSize: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              TODAY!
            </Text>)}


          </View>
        </ImageBackground>
      </View>

      <View
        style={{
          height: "100%",
          width: "60%",
          paddingHorizontal: "3%",
          justifyContent: "center",
          paddingVertical: "3%",
        }}
      >
        <Text style={styles.eventTitle}>{title}</Text>
        <Text style={styles.comment}>
          <Text style={styles.commentAuthor}>{description}</Text>
        </Text>
      </View>

      <View
        style={{
          paddingVertical: "3%",
          height: "100%",
          paddingHorizontal: "8%",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Text style={styles.time}>{time}</Text>
       {!isNotificate &&( <View style={styles.statusCircle}>
          <Text style={styles.statusText}>{notificationNumber}</Text>
        </View>)}
      </View>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;
const deviceHeigth = Dimensions.get("window").height;

const styles = StyleSheet.create({
  outerSection: {
    width: "100%",
    height: (deviceHeigth / 100) * 12,
    paddingLeft: "3%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: Colors.white[200],
    borderBottomWidth: 1,
  },

  titleOuterSection: {
    fontSize: 18,
    fontFamily: "Poppins_700Bold",
    marginVertical: 6,
    color: Colors.black.default,
  },

  eventTitle: {
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
    color: Colors.black.default,
  },
  comment: {
    fontSize: 14,
    color: Colors.black.default,
    fontFamily: "Poppins_400Regular",
  },
  commentAuthor: {
    fontFamily: "Poppins_400Regular",
  },
  time: {
    fontFamily: "Poppins_300Light",
    fontSize: 13,
    color: Colors.black.default,
  },
  statusCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.black.default,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  statusText: {
    color: Colors.white.deafult,
    fontSize: 12,
    fontFamily: "Poppins_700Bold",
  },
});
