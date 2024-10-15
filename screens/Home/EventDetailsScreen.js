import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import Colors from "../../constants/colors";
import { Dimensions } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";
import IconButtonSection from "../../components/IconButtonSection";

function EventDetailsScreen({ route, navigation }) {
  const colorDetailsIcon = Colors.black[300];
  console.log(route.params.isLike)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => {
        return (
          <Image
            style={[{ width: 75, height: 24 }]}
            source={require("../../assets/images/wegoBlackLogo.png")}
          />
        );
      },
      headerShadowVisible: false,
      headerTitleAlign: "center",
    });
  });

  return (
    <>
      <ScrollView>
        <View style={{ marginHorizontal: 16, marginVertical: 16 }}>
          <View style={styles.mapOuter}>
            <View style={styles.reminderOuter}>
              <Text style={styles.reminderInner}>
                {route.params.eventReminder} days left
              </Text>
            </View>
          </View>
          <Text style={styles.title}>{route.params.eventTitle}</Text>

          <Text style={styles.descrp}>{route.params.eventDescription} </Text>

          <View style={styles.details}>
            <View style={styles.duoDetails}>
              <Ionicons name="calendar" size={20} color={colorDetailsIcon} />
              <Text style={styles.duoDetailsText}>
                {route.params.eventDate}
              </Text>
            </View>

            <View style={styles.duoDetails}>
              <Ionicons name="time" size={20} color={colorDetailsIcon} />
              <Text style={styles.duoDetailsText}>
                {route.params.eventHour}
              </Text>
            </View>

            <View style={styles.duoDetails}>
              <Ionicons name="location" size={20} color={colorDetailsIcon} />
              <Text style={styles.duoDetailsText}>
                {route.params.eventLocation}
              </Text>
            </View>
          </View>

          <View style={styles.infoOuterSection}>
            <View style={styles.infoInnerSection}>
              <Image
                style={styles.profilePic}
                source={{ uri: route.params.eventProfileImg }}
              />
              <View style={styles.infoTextInner}>
                <Text style={styles.usernameText}>
                  {route.params.eventUsername}
                </Text>
                <Text style={styles.daysReminderText}>
                  {route.params.eventReminder} days left
                </Text>
              </View>
            </View>
            <View style={styles.heartIcon}>
              <Ionicons
                name="chatbubble-outline"
                size={24}
                color={Colors.black[300]}
              />
              <Text style={styles.underIcon}>243</Text>
            </View>
            <View style={styles.heartIcon}>
              <IconButtonSection
            name={route.params.isLike ? "heart" : "heart-outline"}
            size={24}
                color={Colors.black[300]}
              />
              <Text style={styles.underIcon}>243</Text>
            </View>
          </View>

          <View style={styles.infoParticipantsOuterSection}>
            <View style={styles.infoParticipantsInnerSection}>
              <Text style={styles.participantsText}>Other Participants</Text>
            </View>
            <Ionicons name="people" size={20} color={Colors.black.default} />
            <Text style={styles.capacityInner}>
              {route.params.eventEnrolled}/{route.params.eventCapacity}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.joinOuter}>
        <PrimaryButton
          children={"Join Event"}
          buttonColor={Colors.blue.default}
          buttonFontFamily={"Poppins_600SemiBold"}
        />
      </View>
    </>
  );
}

export default EventDetailsScreen;
const deviceWidth = Dimensions.get("window").width;
const deviceHeigth = Dimensions.get("window").height;

const styles = StyleSheet.create({
  mapOuter: {
    backgroundColor: Colors.black[300],
    height: 200,
    borderRadius: 16,
  },
  reminderOuter: {
    marginStart: 8,
    backgroundColor: Colors.blue.default,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderRadius: 8,
    marginTop: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: "flex-start",
  },
  reminderInner: {
    fontFamily: "Poppins_400Regular",
    color: Colors.white.deafult,
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 24,
    paddingVertical: 10,
  },
  descrp: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
  },

  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 4,
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderColor: Colors.black[200],
  },
  duoDetails: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  duoDetailsText: {
    paddingStart: 8,
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
  },

  infoOuterSection: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "justify-content",
    borderBottomWidth: 2,
    borderColor: Colors.black[200],
  },
  infoInnerSection: {
    flexDirection: "row",
    flex: 1,
    //justifyContent: 'space-around'
  },
  infoTextInner: {
    marginLeft: 10,
    alignContent: "center",
    justifyContent: "center",
  },

  usernameText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
  },
  daysReminderText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
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
    paddingLeft: 10,
  },

  underIcon: {
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
    color: Colors.black[300],
  },

  joinOuter: {
    height: "auto",
    backgroundColor: Colors.white.null,
    borderTopColor: Colors.white[200],
    borderTopWidth: 1,
    paddingVertical: 10,
  },

  infoParticipantsOuterSection: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "justify-content",
    alignItems: "center",
  },
  infoParticipantsInnerSection: {
    flexDirection: "row",
    flex: 1,
  },

  capacityInner: {
    fontFamily: "Poppins_700Bold",
    fontSize: 12,
    paddingLeft: 8,
  },
  participantsText: {
    fontFamily: "Poppins_600SemiBold",
  },
});
