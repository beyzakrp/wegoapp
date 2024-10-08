import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import Colors from "/Users/beyzakarapicak/wgapp/constants/colors.js";
import { Dimensions } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import PrimaryButton from "/Users/beyzakarapicak/wgapp/components/PrimaryButton";

function EventDetailsScreen({ route, navigation }) {
  const colorDetailsIcon = Colors.black[300];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => {
        return  <Image
        style={[{ width: 75, height: 24 }]}
        source={require("/Users/beyzakarapicak/wgapp/assets/images/wegoBlackLogo.png")}
      />
      },
      headerShadowVisible: false,
      headerTitleAlign: 'center',
    })
  })

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
              <Feather name="calendar" size={20} color={colorDetailsIcon} />
              <Text style={styles.duoDetailsText}>
                {route.params.eventDate}
              </Text>
            </View>

            <View style={styles.duoDetails}>
              <Feather name="clock" size={20} color={colorDetailsIcon} />
              <Text style={styles.duoDetailsText}>
                {route.params.eventHour}
              </Text>
            </View>

            <View style={styles.duoDetails}>
              <Feather name="map-pin" size={20} color={colorDetailsIcon} />
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
              <Feather
                name="message-circle"
                size={24}
                color={Colors.black[300]}
              />
              <Text style={styles.underIcon}>243</Text>
            </View>
            <View style={styles.heartIcon}>
              <Feather name="heart" size={24} color={Colors.black[300]} />
              <Text style={styles.underIcon}>243</Text>
            </View>
          </View>

          <View style={styles.infoParticipantsOuterSection}>
            <View style={styles.infoParticipantsInnerSection}>
              <Text style={styles.participantsText}>Other Participants</Text>
            </View>
            <Feather name="users" size={20} color={Colors.black.default} />
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
