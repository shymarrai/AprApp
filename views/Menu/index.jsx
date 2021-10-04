import React from 'react';
import { View } from 'react-native';

import { HeaderSeparator } from '../../components/HeaderSeparator'
import { Button } from '../../components/Button'

import ImageLogo from '../../assets/logoEllca.svg'
import {styles} from './styles'

export function Menu({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={[styles.box, {marginTop:'-15%'}]}>
        <HeaderSeparator content={'APR VIRTUAL'}/>
        
      </View>
        <ImageLogo width={'250'} height={'250'} style={styles.imageLogo}/>     
      <View style={styles.box}>
        <Button title={'GERAR APR DIGITAL'} onPress={() => navigation.navigate('AprSelector')}/>   
        <Button title={'GERAR APR DE RECUSA'} onPress={() => navigation.navigate('AprRecuse')} />
        <Button title={'AJUDA'} onPress={() => navigation.navigate('Help')}/>
      </View>

  </View>
  );
}



