import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import EventDetailsScreen from "../screens/Home/EventDetailsScreen";
import BeforeDetailsScreen from "../screens/Home/BeforeDetailsScreen";
import AfterDetailsScreen from "../screens/Home/AfterDetailsScreen";
import TabNavigator from "./TabNavigator";
import Colors from "../constants/colors";
import { Provider } from "react-redux";
import { store } from "../store/redux/store";
import NotificationScreen from "../screens/Notification/NotificationScreen";
import { CommentScreen } from "../screens/CommentScreen";
import AddEventScreen from "../screens/AddContent/AddEventScreen";
import IconButtonSection from "../components/IconButtonSection";
import AddEventLocation from "../components/AddEventLocation";
import AddEventTicket from "../components/AddEventTicket";
import AddEventTicketFinal from "../components/AddEventTicketFinal";

const Stack = createNativeStackNavigator();

//AuthenticatedStack
function HomeStackNavigator() {
  const AppTheme = {
    // color: Colors.black[300],
    // size: 24,
    colors: {
      background: Colors.white.null,
    },
  };

  function CustomBackButton({ navigation }) {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <IconButtonSection
          name={"chevron-back-outline"}
          size={24}
          color={Colors.black.default}
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>
    );
  }

  return (
    <>
      <Provider store={store}>
        {/* <LikedContextProvider> */}
        {/*<NavigationContainer theme={AppTheme}>*/}
        <Stack.Navigator>
          <Stack.Screen
            name="main"
            component={TabNavigator}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="EventDetails"
            component={EventDetailsScreen}
            options={({ navigation }) => ({
              headerLeft: () => <CustomBackButton navigation={navigation} />,
            })}
          />
          <Stack.Screen name="BeforeDetails" component={BeforeDetailsScreen} />
          <Stack.Screen name="AfterDetails" component={AfterDetailsScreen} />
          <Stack.Screen
            name="Notification"
            component={NotificationScreen}
            options={
              {
                //presentation: 'modal'
              }
            }
          />
          <Stack.Screen
            name="Comments"
            component={CommentScreen}
            options={{ presentation: "modal" }}
          />
          <Stack.Screen
            name="AddEvent"
            component={AddEventScreen}
            options={({ navigation }) => ({
              headerLeft: () => <CustomBackButton navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="AddEventLocation"
            component={AddEventLocation}
            options={({ navigation }) => ({
              headerLeft: () => <CustomBackButton navigation={navigation} />,
            })}
          />
           <Stack.Screen
            name="AddEventTicket"
            component={AddEventTicket}
            options={({ navigation }) => ({
              headerLeft: () => <CustomBackButton navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="AddEventTicketFinal"
            component={AddEventTicketFinal}
            options={({ navigation }) => ({
              headerLeft: () => <CustomBackButton navigation={navigation} />,
            })}
          />
        </Stack.Navigator>
        {/*</NavigationContainer>*/}
        {/* </LikedContextProvider> */}
      </Provider>
    </>
  );
}

export default HomeStackNavigator;

const styles = StyleSheet.create({});

/* options={{  headerRight: () => {
                return (
                    <IconButtonSection 
                    onPress={headerButtonPressHandler}
                    name={"bell"}
                    size={24}
                    color={'#333333'} />
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
              headerShadowVisible: false,
              headerTitleAlign: "center",
              hideWhenScrolling: false,
            }}*/
