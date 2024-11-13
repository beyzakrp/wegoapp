import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import Colors from "../constants/colors";
import { SearchBar } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import { Directions } from "react-native-gesture-handler";
import PrimaryButton from "./PrimaryButton";
import { useNavigation } from "@react-navigation/native";

function AddEventLocation({ route }) {
  const navigation = useNavigation();

  const [selectedLocation, setSelectedLocation] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => {
        return (
          <Image
            style={[{ width: 75, height: 24 }]}
            source={require("../assets/images/wegoBlackLogo.png")}
          />
        );
      },

      headerStyle: {
        borderBottomWidth: 0,
      },
      headerTransparent: true,
    });
  }, [navigation]);

  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.00421,
  };

  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ lat: lat, lng: lng });
  }

  function svaePickedLocationHandler() {
    if (!selectedLocation) {
      Alert.alert("No picked Location!", "You have a pick one...");
      return;
    }
  }
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  function pressHandler() {
    console.log("basıldı");
    navigation.navigate("AddEventTicket", {
   
        title: route.params.title,
        lat: route.params.lat,
        lng: selectedLocation.lng,
    });
  }
  return (
    <>
      <MapView
        initialRegion={region}
        style={styles.map}
        onPress={selectLocationHandler}
      >
        {selectedLocation && (
          <Marker
            coordinate={{
              latitude: selectedLocation.lat,
              longitude: selectedLocation.lng,
            }}
            image={require("../assets/images/MarkerPin.png")}
          />
        )}
      </MapView>
      <View style={styles.modalOuter}>
        <View style={styles.searchOuter}>
          <SearchBar
            placeholder="Search... "
            onChangeText={updateSearch}
            value={search}
            containerStyle={{}}
            platform="ios"
            searchIcon={
              <Ionicons name="search" size={24} color={Colors.black[300]} />
            }
            inputContainerStyle={{
              backgroundColor: Colors.white[100],
              borderRadius: 12,
              paddingHorizontal: 10,
            }}
            inputStyle={{
              fontFamily: "Poppins_400Regular",
              fontSize: 13,
              color: Colors.black[600],
            }}
          />
        </View>

        <View style={styles.infoOuter}>
          <View style={{}}>
            <Text style={styles.title} children={"Event Category"} />

            <Text style={styles.eventName} children={route.params.title} />
          </View>
          {selectedLocation && (
            <View
              style={{
                marginHorizontal: 5,
                marginVertical: 2,
                backgroundColor: Colors.orange.default,

                borderRadius: 12,
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}
            >
              <Pressable onPress={pressHandler}>
                <Text
                  children={"Continue"}
                  style={{
                    color: Colors.white.deafult,
                    fontFamily: "Poppins_600SemiBold",
                  }}
                />
              </Pressable>
            </View>
          )}
        </View>

        <View style={styles.banner}>
          <View style={styles.circle}>
            <Ionicons name="locate" size={24} color={Colors.black.default} />
          </View>
          <Text style={styles.textInner}>
            You can choose the most suitable location and venue for your event
            by selecting it on the map or by searching directly.
          </Text>
        </View>
      </View>
    </>
  );
}

export default AddEventLocation;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  modalOuter: {
    height: "30%",
    width: "100%",
    backgroundColor: Colors.white.null,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  searchOuter: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  banner: {
    width: "100%",
    height: "35%",
    backgroundColor: Colors.blue[100],
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: Colors.white.null,
    justifyContent: "center",
    alignItems: "center",
  },
  textInner: {
    fontFamily: "Poppins_400Regular",
    fontSize: 10,
    paddingHorizontal: 12,
    color: Colors.black.default,
  },
  infoOuter: {
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: Colors.black[400],
  },
  eventName: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 13,
  },
});
