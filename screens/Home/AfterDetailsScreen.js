import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Colors from '../../constants/colors';
import IconButtonSection from '../../components/IconButtonSection';
import BeforeTitleSection from '../../components/BeforeTitleSection';

function AfterDetailsScreen  ({route, navigation}) {
  function headerButtonPressHandler() {
    console.log("Pressed to the Upper bar");
    navigation.goBack();
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => {
        return <BeforeTitleSection name={"After"} />;
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
    <View>
      <Text>AfterDetailsScreen</Text>
      <Text>{route.params.afterTitle}</Text>
    </View>
  )
}

export default AfterDetailsScreen

const styles = StyleSheet.create({})