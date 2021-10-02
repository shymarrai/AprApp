import React from 'react';
import { View } from 'react-native';

import { LineDivisor } from '../../components/LineDivisor'
import { Button } from '../../components/Button'

import ImageLogo from "../../assets/logoEllca.svg"
import {styles} from './styles'

export function Menu() {

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <LineDivisor content={"APR VIRTUAL"}/>
        
      </View>
        <ImageLogo width={'250'} height={'250'} style={styles.imageLogo}/>     
      <View style={styles.box}>
        <Button title={'GERAR APR DIGITAL'} />
        <Button title={'GERAR APR DE RECUSA'} />
        <Button title={'AJUDA'} />
      </View>

  </View>
  );
}



