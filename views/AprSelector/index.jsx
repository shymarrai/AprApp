import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import { Button } from '../../components/Button';

import {styles} from './styles'

export function AprSelector(){
  const [active, setActive] = useState(false)
  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        ESCOLHA O MODELO DE APR DESEJADO:
      </Text>
        <Button title={'PRÓXIMO'} active={active}/>
    </View>
  )
}