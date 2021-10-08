import React, { useEffect } from 'react';
import { View } from 'react-native';

import { MotiView } from 'moti'

import { HeaderSeparator } from '../../components/HeaderSeparator'
import { Button } from '../../components/Button'

import ImageLogo from '../../assets/logoEllca.svg'
import {styles} from './styles'

export function Menu({ navigation }) {

  return (
    <MotiView style={[styles.container]}
      from={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{
        type: 'timing',
        duration: 2000
      }}
    >

      <View style={[styles.box, {marginTop:'-15%'}]}>
        <HeaderSeparator content={'APR VIRTUAL'}/>
        
      </View>

      <ImageLogo width={'250'} height={'250'} style={styles.imageLogo}/>

      <MotiView style={styles.box}
        from={{left:'-100%'}}
        animate={{left:'0%'}}
        transition={{
          type: 'timing',
          duration:2000
        }}
      >
        <Button title={'GERAR APR DIGITAL'} onPress={() => navigation.navigate('AprSelector')}/>   
        <Button title={'GERAR APR DE RECUSA'} onPress={() => navigation.navigate('AprRecuse')} />
        <Button title={'AJUDA'} onPress={() => navigation.navigate('Help')}/>
      </MotiView>

  </MotiView>
  );
}



