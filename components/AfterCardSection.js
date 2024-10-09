import { StyleSheet, Text, View, Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import  Colors  from '../constants/colors'
import { LinearGradient } from 'expo-linear-gradient';

function AfterCardSection ({title, profileImage, username, eventImage,onPress}){

  return (
    <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
    <View style={styles.afterOuterSection}>
        <View style={styles.imageOuterSection}>
            
      <ImageBackground resizeMode="cover" style={{
        flex:1,
        alignContent: 'flex-end',
        justifyContent:'flex-end',
        opacity:1
        }} 
        source={ {uri: eventImage}}
       // source={{uri: 'https://images.unsplash.com/photo-1598275277521-1885382d523a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYWtpbmd8ZW58MHx8MHx8fDA%3D'}}
        onLoad={() => console.log("Image loaded successfully")}
        onError={(error) => console.log("Image load error:", error.nativeEvent.error)}>
            <LinearGradient colors={[Colors.black.gradient, Colors.white.empty]}
            style={{
                width: '100%',
                height:'80%',
                alignItems: 'flex-end',
                justifyContent: 'flex-end'
            }}>

<View style={styles.infoOuterSection}>
        <View style={styles.infoInnerSection}>
            <Image style ={styles.profilePic} 
            source={ {uri: profileImage}}
           //source={{uri:'https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D'}}
                />
            <View style={styles.infoTextInner}>
                <Text style ={styles.usernameText} >{username}</Text>
                <Text style ={styles.eventNameText} >{title}</Text>
            </View>
        </View>
      </View>
           
            </LinearGradient>
        </ImageBackground>

        </View>
  

      
    </View>
    </Pressable>
  )
}

export default AfterCardSection

const styles = StyleSheet.create({
    afterOuterSection: {
        height: 220,
        //flex:1,
        //backgroundColor: Colors.black[200],
        paddingLeft: 6,
        marginLeft: 5
    },

    imageOuterSection: {
        height:220,
        width: 150,
        borderRadius: 16,
        overflow: 'hidden'
    },

    
    infoOuterSection: {
        flexDirection:'row',
       justifyContent: 'justify-content',
       marginVertical: 10,
       marginHorizontal: 10,
       

    },
    infoInnerSection: {
       flexDirection: 'row',
       flex: 1,
       //justifyContent: 'space-around'
    },
    infoTextInner: {
      marginLeft: 5,
      alignContent: 'center',
      justifyContent: 'center'
    },

    usernameText: {
        fontFamily: 'Poppins_700Bold',
        fontSize:11,
        color: Colors.white.deafult
    },
    eventNameText: {
        fontFamily: 'Poppins_400Regular',
        fontSize:10,
        color: Colors.white.deafult,
    },

    profilePic: {
        //flex:1,
        width:32,
        height: 32,
        borderRadius: 9,
    },

})




/*
import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';

const EventData = [
  { id: '1', title: 'Maç Gecesi', image: 'https://example.com/image1.jpg', username: '@orkunhira' },
  { id: '2', title: 'Şarap Tadımı', image: 'https://example.com/image2.jpg', username: '@selin' },
  { id: '3', title: 'Barbekü Partisi', image: 'https://example.com/image3.jpg', username: '@ferdi' },
  { id: '4', title: 'Sabah Yürüyüşü', image: 'https://example.com/image4.jpg', username: '@defne' },
  { id: '5', title: 'Teoman Konseri', image: 'https://example.com/image5.jpg', username: '@burcu' }
  // Diğer veriler...
];

const HorizontalInfiniteScroll = () => {
  const [events, setEvents] = useState(EventData);
  const [loading, setLoading] = useState(false);

  // Yeni verileri yükleme fonksiyonu
  const loadMoreData = () => {
    if (!loading) {
      setLoading(true);

      // Burada yeni verileri ekleyerek sonsuz kaydırmayı sağlarız
      const newData = [
        { id: '6', title: 'Yeni Etkinlik', image: 'https://example.com/image6.jpg', username: '@newuser' },
        { id: '7', title: 'Bir Başka Etkinlik', image: 'https://example.com/image7.jpg', username: '@anotheruser' }
        // Daha fazla veri...
      ];

      // Yeni verileri mevcut listeye ekle
      setTimeout(() => {
        setEvents([...events, ...newData]);
        setLoading(false);
      }, 1000);  // Simüle edilmiş yükleme süresi
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}  // Yatay mod
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventContainer}>
            <Image source={{ uri: item.image }} style={styles.eventImage} />
            <Text>{item.title}</Text>
            <Text>{item.username}</Text>
          </View>
        )}
        onEndReached={loadMoreData}  // Sonsuz kaydırma
        onEndReachedThreshold={0.5}  // Liste sonuna %50 yaklaşınca yeni veri yükle
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventContainer: {
    margin: 10,
    width: 100,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default HorizontalInfiniteScroll;

*/