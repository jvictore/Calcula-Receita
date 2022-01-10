import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { TelaCalcula } from "./componentes/TelaCalcula";
import { TelaIngredientes } from "./componentes/TelaIngredientes";
import { TelaPrecos } from "./componentes/TelaPrecos";




const Pilha=createStackNavigator();


function isGrama(unidade){
  if (unidade == "Gramas" || unidade == "Quilogramas")
    return true;
  else
    return false;
}



export default function App1(){
  
  return (
    <NavigationContainer>
      <Pilha.Navigator initialRouteName="Precos">
        <Pilha.Screen 
          name="Precos"
          component={TelaPrecos}
          options={({ navigation }) => ({
            title:'Quantidades e preços de compra',
            headerStyle:{
              backgroundColor:"#507DBC"
            },
            headerTintColor:"#000",
            headerTitleStyle:{
              fontWeight:'bold'
            },
          })}
        />

        <Pilha.Screen 
          name="Ingredientes"
          component={TelaIngredientes}
          options={({ navigation }) => ({
            title:'Quantidades usadas',
            headerStyle:{
              backgroundColor:"#507DBC"
            },
            headerTintColor:"#000",
            headerTitleStyle:{
              fontWeight:'bold'
            },
          })}
        />

        <Pilha.Screen
          name="Calcula"
          component={TelaCalcula}
          options={({ navigation }) => ({
            title:'Tela Inicial',
            headerStyle:{
              backgroundColor:"#507DBC"
            },
            headerTintColor:"#fff",
          })}
        />
        
        
      </Pilha.Navigator>
    </NavigationContainer>

  );
}
