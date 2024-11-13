import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";
import IconButtonSection from "./IconButtonSection";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export function PlusButtonSection() {
  const navigation = useNavigation();


  function plusButtonHandler() {
    console.log("Pressed plus button");
  }

  const [menuOpen, setMenuOpen] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleMenu = () => {
    const toValue = menuOpen ? 0 : 1;
    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setMenuOpen(!menuOpen);
  };

  const menuStyle = {
    transform: [
      {
        scale: animation,
      },
    ],
    opacity: animation,
  };

  function addEventHandler() {
    navigation.navigate('AddEvent', {})
  }
  return (
    <View style={styles.container}>
      {menuOpen && (
        <View style={[styles.menuContainer]}>
      
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Before ekle</Text>
            </TouchableOpacity>
     

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>After ekle</Text>
            </TouchableOpacity>
         

          
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Shot ekle</Text>
            </TouchableOpacity>
       

          
            <TouchableOpacity onPress={addEventHandler} style={styles.menuItem}>
              <Text style={styles.menuText}>Etkinlik Oluştur</Text>
            </TouchableOpacity>
          
        </View>
      )}
      <TouchableOpacity style={styles.outerContainer} onPress={toggleMenu}>
        <Ionicons
          name={"add"}
          size={deviceWidth / 8}
          color={Colors.white.deafult}
        />
      </TouchableOpacity>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;
//console.log(deviceWidth);

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: Colors.blue.default,
    height: deviceWidth / 6,
    width: deviceWidth / 6,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: (deviceWidth / 100) * 3,
    right: (deviceWidth / 100) * 3,
    elevation: 8, // For Android Shadow
    // Under that line about IOS Shadow
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  menuContainer: {
    flex: 1,
    position: "absolute",
    bottom: 90,
    right: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  menuItem: {
    backgroundColor: "#fff",

    marginVertical: 5,
    paddingVertical: 5,
    paddingRight: 100,
    paddingLeft: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems: "flex-start",
  },
  menuText: {
    fontSize: 12,

    fontFamily: "Poppins_700Bold",
    color: "#333",
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#007bff",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
});
