import React from 'react';
import { Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import {styles} from './styles'

export function Button({title, active,...rest}){
  return(
    <RectButton 
    style={[styles.button, active != false ? {backgroundColor: '#4EB6FC'} : {backgroundColor: '#6C7A85'}]}
    {...rest}
    
    >
      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  )
}