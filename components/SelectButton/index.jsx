import React, { useState } from 'react';
import { View } from 'react-native';

import SimpleSelectButton from 'react-native-simple-select-button';

import {styles} from './styles'

export function SelectButton({data, ...rest}) {
  return (
    <View style={styles.container}>
      <SimpleSelectButton
        text={data?.name}
        textSize={14}
        buttonDefaultColor="#fff"
        buttonSelectedColor="#1295FA"
        textDefaultColor="#424242"
        textSelectedColor="#fff"
        {...rest}
      />

    </View>
  )
}