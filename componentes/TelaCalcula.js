import React,{useState} from 'react';
import {
  Text,
  TextInput,
  SafeAreaView,
  View
} from 'react-native';
import { styles } from "../estilos/styles";

export function TelaCalcula({navigation, route}){
    const [porcentagemLucro, onChangeNumberPorcentagem] = React.useState(null);
    const [partes, onChangeNumberPartes] = React.useState("1");
    const precos = route.params.precos
  
    var precoTotal = 0
  
    for (var i = 1; i <= 10; i++) {
      precoTotal = precoTotal + precos[i]
    }
  
    return(
      <View style={{flex: 1}}>
        <View style={styles.centeredView}>
          <SafeAreaView>
            
            <Text style={styles.modalText}>A receita sera dividida em quantas partes?</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumberPartes}
              value={partes}
              placeholder="Partes"
              keyboardType="numeric"
            />
          
            <Text style={styles.modalText}>Digite a porcentagem de lucro desejada:</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumberPorcentagem}
              value={porcentagemLucro}
              placeholder="Porcentagem de lucro"
              keyboardType="numeric"
            />
  
            <Text style={styles.modalText}>Gastos totais:</Text>
            <Text
              style={styles.input}
            >R${precoTotal}</Text>
  
            <Text style={styles.modalText}>Preço final da receita:</Text>
            <Text
              style={styles.input}
            >R${precoTotal + (precoTotal * porcentagemLucro / 100)}</Text>
  
            <Text style={styles.modalText}>Preço por parte:</Text>
            <Text
              style={styles.input}
            >R${(precoTotal + (precoTotal * porcentagemLucro / 100)) / partes}</Text>
  
  
            
  
          </SafeAreaView>
        </View>
      </View>
    )
  }