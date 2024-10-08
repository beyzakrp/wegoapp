import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  FlatList,
} from "react-native";
import React from "react";
import EventCardSection from "../components/EventCardSection";
import HeaderSections from "../components/HeaderSections";
import { AFTERS, EVENTS, BEFORES } from "../data/dummy-data";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventDetailsScreen from "./Home/EventDetailsScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function EventsFeedScreenPart({ navigation }) {
  function renderEventItem(itemData) {
    function pressHandler() {
      navigation.navigate("EventDetails");
    }

    return (
      <EventCardSection
        title={itemData.item.title}
        profileImage={itemData.item.profileImage}
        eventImage={itemData.item.eventImage}
        username={itemData.item.username}
        reminder={itemData.item.reminder}
        fullCapacity={itemData.item.fullCapacity}
        enrolled={itemData.item.enrolled}
        onPress={pressHandler}
      />
    );
  }
  return (
    <>
      <HeaderSections title={"Events"} />
      <FlatList
        data={EVENTS}
        keyExtractor={(item) => item.id}
        renderItem={renderEventItem}
        numColumns={2}
        vertical={true}
      />
    </>
  );
}

export default EventsFeedScreenPart;

const styles = StyleSheet.create({});
