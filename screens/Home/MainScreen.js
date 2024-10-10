import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import React, { useLayoutEffect, useRef } from "react";
import { AFTERS, EVENTS, BEFORES } from "../../data/dummy-data";
import EventCardSection from "../../components/EventCardSection";
import HeaderSections from "../../components/HeaderSections";
import AfterCardSection from "../../components/AfterCardSection";
import BeforeCardSection from "../../components/BeforeCardSection";

import IconButtonSection from "../../components/IconButtonSection";
import { PlusButtonSection } from "../../components/PlusButtonSection";
import { GestureHandlerRootView } from "react-native-gesture-handler";

//const Stack = createNativeStackNavigator();

//navigation = useNavigate();

const deviceWidth = Dimensions.get("window").width;
const paddingH = deviceWidth / 28;

function MainScreen({ navigation }) {
  function headerButtonPressHandler() {
    console.log("Pressed to the Upper bar");
    navigation.navigate("Notification", {})
  }
  console.log(paddingH);
  const scrollY = useRef(new Animated.Value(0)).current;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={{ marginHorizontal: paddingH }}>
            <IconButtonSection
              onPress={headerButtonPressHandler}
              name={"notifications-outline"}
              size={24}
              color={"#333333"}
            />
          </View>
        );
      },
      headerTitle: () => {
        return (
          <Image
            style={[{ width: 75, height: 24 }]}
            source={require("/Users/beyzakarapicak/wgapp/assets/images/wegoBlackLogo.png")}
          />
        );
      },

      headerShadowVisible: true,
      headerTitleAlign: "center",
      headerShown:
        scrollY.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0],
          extrapolate: "clamp",
        }) === 0
          ? false
          : true,
    });
  }, [navigation, headerButtonPressHandler, scrollY]);

  function renderBeforeEvent(itemData) {
    function pressHandler() {
      navigation.navigate("BeforeDetails", {
        beforeTitle: itemData.item.title,
        beforeUsername: itemData.item.username,
        beforeProfileImg: itemData.item.profileImage,
      });
    }
    return (
      <BeforeCardSection
        title={itemData.item.title}
        profileImage={itemData.item.profileImage}
        username={itemData.item.username}
        onPress={pressHandler}
      />
    );
  }
  function renderAfterItem(itemData) {
    function pressHandler() {
      navigation.navigate("AfterDetails", {
        afterTitle: itemData.item.title,
      });
    }
    return (
      <AfterCardSection
        title={itemData.item.title}
        profileImage={itemData.item.profileImage}
        username={itemData.item.username}
        eventImage={itemData.item.eventImage}
        onPress={pressHandler}
      />
    );
  }
  function renderEventItem(itemData) {
    function pressHandler() {
      navigation.navigate("EventDetails", {
        // {...itemData.item}
        eventId: itemData.item.id,
        eventTitle: itemData.item.title,
        eventProfileImg: itemData.item.profileImage,
        eventDescription: itemData.item.description,
        eventReminder: itemData.item.reminder,
        eventDate: itemData.item.date,
        eventHour: itemData.item.hour,
        eventLocation: itemData.item.location,
        eventUsername: itemData.item.username,
        eventEnrolled: itemData.item.enrolled,
        eventCapacity: itemData.item.fullCapacity,
        eventIsLike: itemData.item.isLike
      });

    }

    return (
      <EventCardSection
        id={itemData.item.id}
        title={itemData.item.title} 
        profileImage={itemData.item.profileImage}
        eventImage={itemData.item.eventImage}
        username={itemData.item.username}
        reminder={itemData.item.reminder}
        fullCapacity={itemData.item.fullCapacity}
        enrolled={itemData.item.enrolled}
        onPress={pressHandler}
        description={itemData.item.description}
        hour={itemData.item.hour}
        date={itemData.item.date}
        location={itemData.item.location}
        isLike={itemData.item.isLike}
      />
    );
  }
  return (
    <>
    <GestureHandlerRootView>
      <ScrollView>
        <HeaderSections title={"Befores"} />
        <FlatList
          data={BEFORES}
          keyExtractor={(item) => item.id}
          renderItem={renderBeforeEvent}
          horizontal={true}
          nestedScrollEnabled={true}
        />

        <HeaderSections title={"Afters"} />
        <FlatList
          data={AFTERS}
          keyExtractor={(item) => item.id}
          renderItem={renderAfterItem}
          horizontal={true}
          nestedScrollEnabled={true}
        />

        <HeaderSections title={"Events"} />
        <FlatList
          data={EVENTS}
          keyExtractor={(item) => item.id}
          renderItem={renderEventItem}
          numColumns={2}
          vertical={true}
          nestedScrollEnabled={true}
        />
      </ScrollView>
      <PlusButtonSection/>
      </GestureHandlerRootView>
    </>
  );
}
export default MainScreen;

const styles = StyleSheet.create({});

/*
  <ScrollView style={{}}>
      
          <HeaderSections title={"Befores"} />
          <FlatList
            data={BEFORES}
            keyExtractor={(item) => item.id}
            renderItem={renderBeforeEvent}
            horizontal={true}
            nestedScrollEnabled={true}
          />

          <HeaderSections title={"Afters"} />
          <FlatList
            data={AFTERS}
            keyExtractor={(item) => item.id}
            renderItem={renderAfterItem}
            horizontal={true}
            nestedScrollEnabled={true}
          />

          <HeaderSections title={"Events"} />
          <FlatList
            data={EVENTS}
            keyExtractor={(item) => item.id}
            renderItem={renderEventItem}
            numColumns={2}
            vertical={true}
            nestedScrollEnabled={true}
          />
        
      </ScrollView>
*/
