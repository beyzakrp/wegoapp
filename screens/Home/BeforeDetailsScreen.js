import { StyleSheet, Text, View, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import Colors from "../../constants/colors";
import BeforeTitleSection from "../../components/BeforeTitleSection";
import IconButtonSection from "../../components/IconButtonSection";
import { StatusBar } from "expo-status-bar";

import { useDispatch, useSelector } from "react-redux";
import { addLikeBefore, removeLikeBefore } from "../../store/redux/likes";

function BeforeDetailsScreen({ route, navigation }) {
  const beforeId = route.params.id;
  const likeBeforeId = useSelector((state) => state.likeEvents.ids);
  const beforeIsLike = likeBeforeId.includes(beforeId);
  const dispatch = useDispatch();

  function changeLikedStatusHandler() {
    if (beforeIsLike) {
      dispatch(removeLikeBefore({ id: beforeId }));
    } else {
      dispatch(addLikeBefore({ id: beforeId }));
    }
  }
  function headerButtonPressHandler() {
    console.log("Pressed to the Upper bar");
    navigation.goBack();
  }

  function heartButtonPressHandler() {
    console.log("Pressed to the Heart bar");
  }

  function commentsButtonPressHandler() {
    console.log("Pressed to the Comments bar");
    navigation.navigate("Comments", {});
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => {
        return <BeforeTitleSection name={"Before"} />;
      },
      headerStyle: {
        backgroundColor: Colors.black.null,
      },
      headerTitleAlign: "left",
      headerRight: () => {
        return (
          <IconButtonSection
            onPress={headerButtonPressHandler}
            name={"close"}
            size={24}
            color={Colors.white.null}
          />
        );
      },
      headerLeft: () => {
        return (
          <Text></Text>
        );
      },
    });
  });

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.outerContainer}>
        <View style={styles.beforeOuterSection} />
        <View style={styles.infoOuterSection}>
          <View style={styles.infoInnerSection}>
            <Image
              style={styles.profilePic}
              source={{ uri: route.params.beforeProfileImg }}
            />
            <View style={styles.infoTextInner}>
              <Text style={styles.titleText}>{route.params.beforeTitle}</Text>
              <Text style={styles.usernameText}>
                @{route.params.beforeUsername}
              </Text>
            </View>
          </View>
          <View style={styles.heartIcon}>
            <IconButtonSection
              name="chatbubble-outline"
              size={32}
              color={Colors.white.null}
              onPress={commentsButtonPressHandler}
            />
            <Text style={styles.underIcon}>243</Text>
          </View>
          <View style={styles.heartIcon}>
            <IconButtonSection
              name={beforeIsLike ? "heart" : "heart-outline"}
              size={32}
              color={beforeIsLike ? Colors.pink.default : Colors.white.null}
              onPress={changeLikedStatusHandler}
            />
            <Text style={styles.underIcon}>
              {beforeIsLike && <Text>342</Text>}
              {!beforeIsLike && <Text>341</Text>}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

export default BeforeDetailsScreen;

const styles = StyleSheet.create({
  beforeOuterSection: {
    backgroundColor: Colors.black[400],
    flex: 1,
    borderRadius: 20,
  },
  outerContainer: {
    flex: 1,
    backgroundColor: Colors.black.null,
  },
  textInnerContainer: {
    color: Colors.white.null,
  },
  infoOuterSection: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "justify-content",
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

  titleText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
    color: Colors.white.null,
  },
  usernameText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: Colors.white.null,
  },

  profilePic: {
    //flex:1,
    width: 64,
    height: 64,
    borderRadius: 25,
  },

  heartIcon: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 15,
  },

  underIcon: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    color: Colors.white.null,
  },
});
