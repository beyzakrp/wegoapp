import { StyleSheet, Text, View } from "react-native";
import { React } from "react";
import Colors from "../constants/colors";
import EventNameSection from "./EventNameSection";
import {
  FlatList,
  GestureHandlerRootView,

} from "react-native-gesture-handler";
import { EVENTS } from "../data/dummy-data";
import { useNavigation } from "@react-navigation/native";

function AddEventForm({  }) {
  const navigation = useNavigation();
  
  function renderEventName(itemData) {
    function pressHandler() {
      navigation.navigate("AddEventLocation", {
        id: itemData.item.id,
        title: itemData.item.title,
      });
    }
    return (<EventNameSection 
    title={itemData.item.title}
    onPress={pressHandler}
    />);
  }

  return (
    <>
     
        <View style={styles.titleOuter}>
          <Text style={styles.title}>Create an Event</Text>
        </View>
      
      <GestureHandlerRootView>
        <FlatList
          data={EVENTS}
          keyExtractor={(item) => item.id}
          renderItem={renderEventName}
          
        />
      </GestureHandlerRootView>
    </>
  );
}

export default AddEventForm;

const styles = StyleSheet.create({
  titleOuter: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginHorizontal: 16,
    paddingBottom: 10,
    marginTop: 100,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderColor: Colors.black[100],
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 24,
    color: Colors.black.null,
  },
});
