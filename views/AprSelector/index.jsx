import React, { useState } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';

import { Button } from '../../components/Button';
import { SelectButton } from '../../components/SelectButton';

import {styles} from './styles'
import { listAprs } from '../../utils/listAprs';
import { HeaderSeparator } from '../../components/HeaderSeparator';

export function AprSelector(){
  const [active, setActive] = useState(false)

  return(
    <View style={styles.container}>
        <Text style={styles.title}>
          ESCOLHA O MODELO DE APR DESEJADO:
        </Text>
        <FlatList
          data={listAprs}
          renderItem={({item}) => (
            <SelectButton data={item} />
          )}
          keyExtractor={item => item?.id}
          style={{marginTop:20}}
          ListFooterComponent={() => <Button title={'PRÓXIMO'} active={active} /> }
          />
        
      
    </View>
  )
}