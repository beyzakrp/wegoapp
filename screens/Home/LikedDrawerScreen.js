import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { EVENTS } from '../../data/dummy-data';
import HeaderSections from '../../components/HeaderSections';
import EventCardSection from '../../components/EventCardSection';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

function LikedDrawerScreen  (  )  {
const likeEventIds = useSelector(state => state.likeEvents.ids);
const likeEvents = EVENTS.filter((event) => likeEventIds.includes(event.id));

if (likeEvents.length === 0) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>You have no liked events yet.</Text>
    </View>
  );
}

const navigation = useNavigation();
function renderEventItem(itemData) {
  function pressHandler() {
    navigation.navigate("EventDetails", {
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
    />
  );
}

  return (
   <>
   <SafeAreaView>
   <HeaderSections title={"Liked Events"} />
        <FlatList
          data={likeEvents}
          keyExtractor={(item) => item.id}
          renderItem={renderEventItem}
          numColumns={2}
          vertical={true}
          nestedScrollEnabled={true}
        />
        
        </SafeAreaView>
   </>
  )
}

export default LikedDrawerScreen

const styles = StyleSheet.create({  rootContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
text: {
  fontSize: 18,
  fontWeight: 'bold',
  color: 'white',
},})