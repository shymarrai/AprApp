import React, { useState } from 'react';
import { View } from 'react-native';

import SimpleSelectButton from 'react-native-simple-select-button';

import {styles} from './styles'

export function SelectButton({data}) {
  const [select, setSelect ] = useState(false)
  return (
    <View style={styles.container}>
      <SimpleSelectButton
        text={data?.name}
        textSize={14}
        buttonDefaultColor="#fff"
        buttonSelectedColor="#1295FA"
        textDefaultColor="#424242"
        textSelectedColor="#fff"
        buttonSelectWidthBorder={2}
        buttonDefaultWidthBorder={2}
        buttonSelectBorderColor='#1295FA'
        buttonDefaultBorderColor='#ddd'
        buttonWidth={300}
        buttonRadius={10}
        isChecked={select}
        onPress={() => setSelect(!select)}
      />

    </View>
  )
}