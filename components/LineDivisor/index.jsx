import React from 'react';
import { View,Text, StyleSheet } from 'react-native'

export function LineDivisor({...props}){
  return(
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        { props.content }
      </Text>
      <View style={styles.lineDivisor} />
    </View>
  )
}
const styles = StyleSheet.create({
lineDivisor:{
  borderBottomWidth: 2,
  borderBottomColor: '#1295FA',
  width: 250,
  alignItems: 'center',
  margin: 8

},
textTitle:{
  textAlign: 'center',
  fontSize: 29,
  fontWeight: 'normal',
  fontSize: 29,
  fontFamily: "Inter_300Light"
},
})