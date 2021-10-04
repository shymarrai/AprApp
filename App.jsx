import React from 'react';

import { useFonts, Inter_300Light, Inter_500Medium } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from  '@react-navigation/native-stack';


import { HeaderSeparator } from './components/HeaderSeparator'

import { Menu } from './views/Menu'
import { AprSelector } from './views/AprSelector'
import { AprRecuse } from './views/AprRecuse'
import { Help } from './views/Help'

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return(

      <AppLoading />
    )
  }else{
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Menu}
          screenOptions={{ 
            headerShadowVisible:false,
            headerTintColor:'#4EB6FC', 
            headerTitle: () => (
              <HeaderSeparator content={true}/>
              ),
          }}
            
          >
          <Stack.Screen name="Menu" component={Menu} options={{headerShown:false}}/>
          <Stack.Screen name="AprSelector" component={AprSelector} options={{title:""}}/>
          <Stack.Screen name="AprRecuse" component={AprRecuse} options={{title:""}}/>
          <Stack.Screen name="Help" component={Help} options={{title:""}}/>



        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

