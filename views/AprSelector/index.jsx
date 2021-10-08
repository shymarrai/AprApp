import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Button } from '../../components/Button';
import { SelectButton } from '../../components/SelectButton';

import {styles} from './styles'
import { listAprs } from '../../utils/listAprs';

export function AprSelector(){
  const [active, setActive] = useState(false)
  const [opt0, setOpt0] = useState(false)
  const [opt1, setOpt1] = useState(false)
  const [opt2, setOpt2] = useState(false)
  const [opt3, setOpt3] = useState(false)
  const [opt4, setOpt4] = useState(false)
  const [opt5, setOpt5] = useState(false)
  
  function handleButtonSelectedOpt0(){
    setOpt0(!opt0)
    setOpt1(false)
    setOpt2(false)
    setOpt3(false)
    setOpt4(false)
    setOpt5(false)
    
    setActive(!opt0)
  }
  function handleButtonSelectedOpt1(){
    setOpt0(false)
    setOpt1(!opt1)
    setOpt2(false)
    setOpt3(false)
    setOpt4(false)
    setOpt5(false)
    setActive(!opt1)
  }
  function handleButtonSelectedOpt2(){
    setOpt0(false)
    setOpt1(false)
    setOpt2(!opt2)
    setOpt3(false)
    setOpt4(false)
    setOpt5(false)
    setActive(!opt2)
  }
  function handleButtonSelectedOpt3(){
    setOpt0(false)
    setOpt1(false)
    setOpt2(false)
    setOpt3(!opt3)
    setOpt4(false)
    setOpt5(false)
    setActive(!opt3)
  }
  function handleButtonSelectedOpt4(){
    setOpt0(false)
    setOpt1(false)
    setOpt2(false)
    setOpt3(false)
    setOpt4(!opt4)
    setOpt5(false)
    setActive(!opt4)
  }
  function handleButtonSelectedOpt5(){
    setOpt0(false)
    setOpt1(false)
    setOpt2(false)
    setOpt3(false)
    setOpt4(false)
    setOpt5(!opt5)
    setActive(!opt5)
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        ESCOLHA O MODELO DE APR DESEJADO:
      </Text>
      <ScrollView>
        
        <SelectButton data={listAprs[0]} 
        onPress={() => handleButtonSelectedOpt0()} 
        isChecked={opt0} 
        style={[styles.buttonSelect,
        !opt0 ? styles.buttonSelectDefault : styles.buttonSelectSelected]}/>

        <SelectButton data={listAprs[1]} onPress={() => handleButtonSelectedOpt1()} isChecked={opt1}/>
        <SelectButton data={listAprs[2]} onPress={() => handleButtonSelectedOpt2()} isChecked={opt2}/>
        <SelectButton data={listAprs[3]} onPress={() => handleButtonSelectedOpt3()} isChecked={opt3}/>
        <SelectButton data={listAprs[4]} onPress={() => handleButtonSelectedOpt4()} isChecked={opt4}/>
        <SelectButton data={listAprs[5]} onPress={() => handleButtonSelectedOpt5()} isChecked={opt5}/>
      </ScrollView>
      <Button title={'PRÓXIMO'} active={active} />
      
    </View>
  )
}