import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Colors from '../../constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddEventForm1 from '../../components/AddEventForm1';
import LocationPicker from './LocationPicker';
import ImagePicker from './ImagePicker';

function AddEventScreen  ({navigation})  {
  useLayoutEffect(() => {
    navigation.setOptions({
      
      headerTitle: () => {
        return (
          <Image
            style={[{ width: 75, height: 24 }]}
            source={require("../../assets/images/wegoBlackLogo.png")}
          />
        );
      },

      headerStyle: {
        borderBottomWidth: 0,
        
      },
      headerTransparent: true

     
    });
  }, [navigation]);

  return (
    <>
      
     
        <AddEventForm1/>
    </>
  )
}

export default AddEventScreen

const styles = StyleSheet.create({})