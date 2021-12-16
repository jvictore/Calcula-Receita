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
import styles from '../estilos/Estilos';

export function TelaHome({navigation}){
    const [modalVisible, setModalVisible] = useState(false);
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