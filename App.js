import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ImageLogo from "./assets/logoEllca.svg"
import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';


export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
  });

  return (
    <View style={styles.container}>
      <Text style={[{fontSize: 29,fontFamily: 'Inter_700Bold'}]}>APR VIRTUAL</Text>
      <View style={styles.lineDivisor}></View>
      <ImageLogo width={'80%'} height={'80%'} style={styles.imageLogo}/>
      <View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle:{
    fontSize: 29,
    fontWeight: 'normal',
  },
  lineDivisor:{
    width: '75%',
    height: 1,
    backgroundColor: '#1295FA',
    alignSelf: 'center'
  }
});
