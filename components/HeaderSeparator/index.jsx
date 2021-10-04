import React from 'react';
import { View,Text, StyleSheet, Dimensions  } from 'react-native'

import ImageLogo from '../../assets/logoEllca.svg'

export function HeaderSeparator({...props}){
  const windowWidth = Dimensions.get('window').width;
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
          <View style={[styles.container, {marginBottom: '4%'}]}>
            <ImageLogo width={'100'} height={'100'} style={styles.logo} />
            <View style={[styles.lineDivisor,{margin: 0}]} />
          </View>
        }
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(255,255,255,0)'
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