import { StyleSheet} from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Colors from '../constants/colors'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AuthNavigator, { AuthenticatedStack } from './AuthNavigator'
import { AuthContext }  from '../store/context/auth-context'


const Stack= createNativeStackNavigator();

const AppTheme = {
   // color: Colors.black[300],
   // size: 24,
    colors: {
      background:Colors.white.null,
    }}
function MainNavigator (){
  const authCtx = useContext(AuthContext);
    
  return (
    <>

<NavigationContainer theme={AppTheme}>
  {!authCtx.isAuthenticated && <AuthNavigator/>}
  {authCtx.isAuthenticated && <AuthenticatedStack/>}
   
</NavigationContainer>


</>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})

/*
 <Stack.Navigator screenOptions={{headerShown: false}}>
    
      <Stack.Screen name='IntroOne' component={IntroOneScreen}/>
      <Stack.Screen name='IntroTwo' component={IntroTwoScreen}/>
      
      <Stack.Screen name='Auth' component={AuthNavigator}/>
      <Stack.Screen name='Home' component={HomeStackNavigator}/>


    </Stack.Navigator>
*/