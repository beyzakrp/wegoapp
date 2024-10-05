import { StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, KeyboardAvoidingView, FlatList } from 'react-native'
import React from 'react'
import EventGridTile from '../components/EventGridTile';
import {AFTERS, EVENTS, BEFORES} from '../data/dummy-data'
import EventCardSection from '../components/EventCardSection';
import HeaderSections from '../components/HeaderSections';
import AfterCardSection from '../components/AfterCardSection';
import BeforeCardSection from '../components/BeforeCardSection';

function MainScreen (){

    function renderBeforeEvent(itemData){
        return (
            <BeforeCardSection
            title={itemData.item.title}
            profileImage={itemData.item.profileImage}
            username={itemData.item.username}
            />
        );
    };

    console.log(AFTERS);
    function renderAfterItem(itemData){
        return (
            <AfterCardSection
            title={itemData.item.title}
            profileImage={itemData.item.profileImage}
            username={itemData.item.username}
            eventImage={itemData.item.eventImage}
            />
        );
    };

    console.log(EVENTS);
    function renderEventItem(itemData){
        console.log('Main SCREEN/n',itemData)
        return (
        <EventCardSection  
            title={itemData.item.title} 
            profileImage={itemData.item.profileImage} 
            eventImage={itemData.item.eventImage} 
            username={itemData.item.username} 
            reminder={itemData.item.reminder}
            fullCapacity={itemData.item.fullCapacity}
            enrolled={itemData.item.enrolled}/>
        );
    }
   
  return (
    <View style={{}}>
                           <HeaderSections title={'Befores'}/>
                        <FlatList
                        data={BEFORES}
                        keyExtractor={(item)=> item.id}
                        renderItem={renderBeforeEvent}
                        horizontal={true}/>
                   <HeaderSections title={'Afters'}/>
                  <FlatList
                    data={AFTERS}
                    keyExtractor={(item) => item.id}
                    renderItem={renderAfterItem}
                    horizontal={true}
                  />
           <HeaderSections title={'Events'}/>
   <FlatList
        data={EVENTS} 
        keyExtractor={ (item) => item.id} 
        renderItem={renderEventItem}
        numColumns={2}
     
        
    />
  
    </View>
  );
}
export default MainScreen

const styles = StyleSheet.create({})