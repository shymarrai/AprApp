import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import LottieView  from 'lottie-react-native';
import animateCopy from '../../assets/animations/copy.json'
import animateFile from '../../assets/animations/file.json'
import animateData from '../../assets/animations/data.json'

import {styles} from './styles'

export function Help(){
  return(
    <ScrollView
      contentContainerStyle={styles.container}
      
    >
      <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>
          O que é o AprApp?
        </Text>

        <View style={styles.infoBox} >
          <Text style={[styles.text,{marginRight:10}]}>
            AprApp é uma forma de facilitar e agilizar o processo de preenchimento 
            da APR passando do papel para o celular.
            Um forma mais rápida, mais prática, mais fácil.
          </Text>

          <LottieView 
            style={styles.animationItem}
            source={animateCopy}
            autoPlay
            loop
          />

        </View>
      </View>

      <View style={styles.titleBox}>
        <Text style={styles.title}>
          Como usar?
        </Text>
      </View>
      <View style={styles.infoBox}>
        <LottieView 
          style={[styles.animationItem,{bottom:5}]}
          source={animateData}
          autoPlay
          loop
        />

        <Text style={styles.text}>
          Responda o questionário de acordo com as informações pedidas e selecione apenas o que te atende.
        </Text>

      </View>

      <View style={styles.titleBox}>
        <Text style={styles.title}>
          Etapas
        </Text>
      </View>
      <View style={styles.infoBox}>
        
        <Text style={[styles.text, {marginLeft:30}]}>
          1 - Escolha a APR. {'\n\n'}
          2 - Responda o que for pedido e passe para a próxima pergunta. {'\n\n'}
          3 - Ao final baixe o modelo de APR preenchida com seus dados em PDF. {'\n\n'}
          4 - A APR também será arquivada automaticamente em nuvem. {'\n\n'}
        </Text>

        <LottieView 
          style={[styles.animationItem,{width:150}]}
          source={animateFile}
          autoPlay
          loop
        />
      </View>
      </View>

    </ScrollView>
  )
}