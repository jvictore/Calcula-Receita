import React,{useState} from 'react';
import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  Button,
  View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { colourOptions } from './docs/data';
import Select from "react-select";

const Pilha=createStackNavigator();


function TelaHome({navigation}){
  const [modalVisible, setModalVisible] = useState(false);
  const teste="ola";
  const [qtd1, onChangeNumber] = React.useState(null);
  const [nome1, onChangeText] = React.useState("");

  return(
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Informações do ingrediente:</Text>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder='Nome'
                value={nome1}
              />

              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={qtd1}
                placeholder="Quantidade"
                keyboardType="numeric"
              />
            </SafeAreaView>



            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>{nome1}</Text>
      </Pressable>
    </View>
  )
}

function TelaCanal({navigation}){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Tela Canal</Text>
      <Text>youtube blablabla</Text>
      <Button
        title="Home"
        onPress={()=>navigation.navigate('Home')}
      />
      <Button
        title="Voltar"
        onPress={()=>navigation.goBack()}
      />
    </View>
  )
}

function TelaCursos({navigation}){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Tela Cursos</Text>
      <Button
        title="React Native"
        onPress={()=>navigation.navigate('CursoReactNative',{
          aulas:100, autor:'Bruno'
        })}
      />
    </View>
  )
}

function TelaCursoReactNative({route,navigation}){
  const {aulas}=route.params;
  const {autor}=route.params;
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Cursos de React Native</Text>
      <Text>Aulas: {aulas}</Text>
      <Text>Autor: {autor}</Text>
      <Button
        title="Home"
        onPress={()=>navigation.navigate('Home')}
      />
      <Button
        title="Voltar para cursos"
        onPress={()=>navigation.goBack()}
      />
    </View>
  )
}

export default function App1(){
  
  return (
    <NavigationContainer>
      <Pilha.Navigator initialRouteName="TelaHome">
        <Pilha.Screen
          name="Home"
          component={TelaHome}
          options={{
            title:'Tela Inicial',
            headerStyle:{
              backgroundColor:"#008"
            },
            headerTintColor:"#fff",
            headerRight:()=>(
              <Button
                title="Cursos"
                color="#000"
                onPress={()=>alert('Botao cursos clicado')}
              />
            )
          }}
        />
        <Pilha.Screen 
          name="Canal"
          component={TelaCanal}
          options={{
            title:'Tela Inicial',
            headerStyle:{
              backgroundColor:"#008"
            },
            headerTintColor:"#fff",
            headerTitleStyle:{
              fontWeight:'bold'
            }
          }}
        />
        <Pilha.Screen 
          name="Cursos"
          component={TelaCursos}
          options={{title:'Cursos do Canal'}}
        />
        <Pilha.Screen 
          name="CursoReactNative"
          component={TelaCursoReactNative}
          options={{title:'Cursos de React Native'}}
        />
      </Pilha.Navigator>
    </NavigationContainer>

  );
}



const estilos = StyleSheet.create({
});

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});