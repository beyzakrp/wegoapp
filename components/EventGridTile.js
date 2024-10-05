import { StyleSheet, Text, View, Pressable} from 'react-native'
import React from 'react'
import EventCardSection from './EventCardSection'
import EVENTS from '../data/dummy-data'

function EventGridTile({title, profileImage, eventImage, username, reminder, fullCapacity, enrolled}) {
  return (
    <View>
        <Pressable style={ styles.outerSection}>
            <EventCardSection
           /* title={'Burger Tasting'}
            profileImage={'https://images.unsplash.com/photo-1621276182949-185b77fa7d37?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            eventImage={'https://images.unsplash.com/photo-1495988840227-a5986a3be9fc?q=80&w=3644&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            username={'burcu.dikili'}
            reminder={5} */

            title={title}
            profileImage={profileImage}
            eventImage={eventImage}
            username={username}
            reminder={reminder}
            fullCapacity={fullCapacity}
            enrolled={enrolled}
            ></EventCardSection>
        </Pressable>
    </View>
  )
}

export default EventGridTile

const styles = StyleSheet.create({
    outerSection:{
  
    
    }
})