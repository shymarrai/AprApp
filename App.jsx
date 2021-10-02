import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { useFonts, Inter_300Light, Inter_500Medium } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

import { Menu } from "./views/Menu"

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
      <>
        <Menu />
        <StatusBar />
      </>
    );
  }
}

