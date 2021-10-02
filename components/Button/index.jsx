import React from 'react';
import { Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import {styles} from './styles'

export function Button({title, ...rest}){
  return(
    <RectButton 
    style={styles.container}
    {...rest}
    
    >
      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  )
}