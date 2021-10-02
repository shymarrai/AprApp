import React from 'react';
import { View,Text, StyleSheet } from 'react-native'

import ImageLogo from '../../assets/logoEllca.svg'

export function HeaderSeparator({...props}){
  return(
    <View style={styles.container}>
        { 
          typeof props.content === 'string'
          ?
          <>
            <Text style={styles.textTitle}>
              {props.content}
            </Text>
            <View style={[styles.lineDivisor,{margin: 8}]} />
          </>
          :
          <>
            <ImageLogo width={'120'} height={'120'} style={styles.logo} />
            <View style={[styles.lineDivisor,{margin: 0}]} />
          </>
        }
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  lineDivisor:{
  borderBottomWidth: 2,
  borderBottomColor: '#1295FA',
  width: 250,
  alignItems: 'center',

},
textTitle:{
  textAlign: 'center',
  fontSize: 29,
  fontWeight: 'normal',
  fontSize: 29,
  fontFamily: 'Inter_300Light'
},
logo:{
  marginBottom:0,
  alignSelf: 'center',
  marginBottom: '-5%',
}
})