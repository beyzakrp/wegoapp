import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../../constants/colors'
import { ChatPartSection } from '../../components/ChatPartSection'
import { CHATS } from '../../data/dummy-data'

const ChatScreen = () => {

  function renderChatBlock(itemData){
    return (
      <ChatPartSection
        id={itemData.item.id}
        title={itemData.item.title}
        eventImage={itemData.item.eventImage}
        description={itemData.item.description}
        time={itemData.item.time}
        notificationNumber={itemData.item.notificationNumber}
        strike={itemData.item.strike}
        reminder={itemData.item.reminder}
      />
    )
  }
  return (
    <SafeAreaView>
      <View style={styles.titleOuterContainer}>
        <Text style={styles.title}>
          Messages
        </Text>
      </View>


      <FlatList
          data={CHATS}
          keyExtractor={(item) => item.id}
          renderItem={renderChatBlock}
          nestedScrollEnabled={true}
        />
    </SafeAreaView>
  )
}

export default ChatScreen


const deviceWidth = Dimensions.get("window").width;
const deviceHeigth = Dimensions.get("window").height;


const styles = StyleSheet.create({
  titleOuterContainer: {
    borderBottomColor: Colors.black[200],
    borderBottomWidth: 2
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 32,
    marginHorizontal: (deviceWidth/100)*5,
    marginVertical: (deviceHeigth/100)*2,
    color: Colors.black.null
  }
})