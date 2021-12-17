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
import SelectDropdown from 'react-native-select-dropdown'

const Pilha=createStackNavigator();


function TelaHome({navigation}){
  const tiposUnidades = ["Gramas", "Quilogramas", "Mililitros", "Litros"]
  const unidades = []

  const [modalVisible1, setModalVisible1] = useState(false);
  const [qtd1, onChangeNumber1] = React.useState(null);
  const [nome1, onChangeText1] = React.useState("Ingrediente 1");

  const [modalVisible2, setModalVisible2] = useState(false);
  const [qtd2, onChangeNumber2] = React.useState(null);
  const [nome2, onChangeText2] = React.useState("Ingrediente 2");

  const [modalVisible3, setModalVisible3] = useState(false);
  const [qtd3, onChangeNumber3] = React.useState(null);
  const [nome3, onChangeText3] = React.useState("Ingrediente 3");

  const [modalVisible4, setModalVisible4] = useState(false);
  const [qtd4, onChangeNumber4] = React.useState(null);
  const [nome4, onChangeText4] = React.useState("Ingrediente 4");

  const [modalVisible5, setModalVisible5] = useState(false);
  const [qtd5, onChangeNumber5] = React.useState(null);
  const [nome5, onChangeText5] = React.useState("Ingrediente 5");

  const [modalVisible6, setModalVisible6] = useState(false);
  const [qtd6, onChangeNumber6] = React.useState(null);
  const [nome6, onChangeText6] = React.useState("Ingrediente 6");

  const [modalVisible7, setModalVisible7] = useState(false);
  const [qtd7, onChangeNumber7] = React.useState(null);
  const [nome7, onChangeText7] = React.useState("Ingrediente 7");

  const [modalVisible8, setModalVisible8] = useState(false);
  const [qtd8, onChangeNumber8] = React.useState(null);
  const [nome8, onChangeText8] = React.useState("Ingrediente 8");

  const [modalVisible9, setModalVisible9] = useState(false);
  const [qtd9, onChangeNumber9] = React.useState(null);
  const [nome9, onChangeText9] = React.useState("Ingrediente 9");

  const [modalVisible10, setModalVisible10] = useState(false);
  const [qtd10, onChangeNumber10] = React.useState(null);
  const [nome10, onChangeText10] = React.useState("Ingrediente 10");
  
  

  return(
    <View style={styles.centeredView}>
      {/* Ingrediente 1 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible1(!modalVisible1);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Informações do ingrediente:</Text>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText1}
                placeholder='Nome'
                value={nome1}
              />

            <SelectDropdown
              data={tiposUnidades}
              onSelect={(selectedItem, index) => {
                unidades[1] = selectedItem;
                console.log(unidades)
              }}
              defaultButtonText={"Gramas"}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown}
          />

              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber1}
                value={qtd1}
                placeholder="Quantidade"
                keyboardType="numeric"
              />
            </SafeAreaView>



            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible1(!modalVisible1)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible1(true)}
      >
        <Text style={styles.textStyle}>{nome1}</Text>
      </Pressable>

      {/* Ingrediente 2 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible2(!modalVisible2);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Informações do ingrediente:</Text>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText2}
                placeholder='Nome'
                value={nome2}
              />

            <SelectDropdown
              data={tiposUnidades}
              onSelect={(selectedItem, index) => {
                unidades[2] = selectedItem;
                console.log(unidades)
              }}
              defaultButtonText={"Gramas"}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown}
          />

              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber2}
                value={qtd2}
                placeholder="Quantidade"
                keyboardType="numeric"
              />
            </SafeAreaView>



            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible2(!modalVisible2)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible2(true)}
      >
        <Text style={styles.textStyle}>{nome2}</Text>
      </Pressable>

      {/* Ingrediente 3 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible3}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible3);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Informações do ingrediente:</Text>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText3}
                placeholder='Nome'
                value={nome3}
              />

            <SelectDropdown
              data={tiposUnidades}
              onSelect={(selectedItem, index) => {
                unidades[3] = selectedItem;
                console.log(unidades)
              }}
              defaultButtonText={"Gramas"}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown}
          />

              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber3}
                value={qtd3}
                placeholder="Quantidade"
                keyboardType="numeric"
              />
            </SafeAreaView>



            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible3(!modalVisible3)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible3(true)}
      >
        <Text style={styles.textStyle}>{nome3}</Text>
      </Pressable>

      {/* Ingrediente 4 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible4}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible4);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Informações do ingrediente:</Text>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText4}
                placeholder='Nome'
                value={nome4}
              />

            <SelectDropdown
              data={tiposUnidades}
              onSelect={(selectedItem, index) => {
                unidades[4] = selectedItem;
                console.log(unidades)
              }}
              defaultButtonText={"Gramas"}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown}
          />

              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber4}
                value={qtd4}
                placeholder="Quantidade"
                keyboardType="numeric"
              />
            </SafeAreaView>



            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible4(!modalVisible4)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible4(true)}
      >
        <Text style={styles.textStyle}>{nome4}</Text>
      </Pressable>

      {/* Ingrediente 5 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible5}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible5);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Informações do ingrediente:</Text>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText5}
                placeholder='Nome'
                value={nome5}
              />

            <SelectDropdown
              data={tiposUnidades}
              onSelect={(selectedItem, index) => {
                unidades[5] = selectedItem;
                console.log(unidades)
              }}
              defaultButtonText={"Gramas"}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown}
          />

              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber5}
                value={qtd5}
                placeholder="Quantidade"
                keyboardType="numeric"
              />
            </SafeAreaView>



            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible5(!modalVisible5)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible5(true)}
      >
        <Text style={styles.textStyle}>{nome5}</Text>
      </Pressable>

      {/* Ingrediente 6 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible6}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible6);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Informações do ingrediente:</Text>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText6}
                placeholder='Nome'
                value={nome6}
              />

            <SelectDropdown
              data={tiposUnidades}
              onSelect={(selectedItem, index) => {
                unidades[6] = selectedItem;
                console.log(unidades)
              }}
              defaultButtonText={"Gramas"}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown}
          />

              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber6}
                value={qtd6}
                placeholder="Quantidade"
                keyboardType="numeric"
              />
            </SafeAreaView>



            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible6(!modalVisible6)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible6(true)}
      >
        <Text style={styles.textStyle}>{nome6}</Text>
      </Pressable>

      {/* Ingrediente 7 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible7}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible7);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Informações do ingrediente:</Text>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText7}
                placeholder='Nome'
                value={nome7}
              />

            <SelectDropdown
              data={tiposUnidades}
              onSelect={(selectedItem, index) => {
                unidades[7] = selectedItem;
                console.log(unidades)
              }}
              defaultButtonText={"Gramas"}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown}
          />

              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber7}
                value={qtd7}
                placeholder="Quantidade"
                keyboardType="numeric"
              />
            </SafeAreaView>



            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible7(!modalVisible7)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible7(true)}
      >
        <Text style={styles.textStyle}>{nome7}</Text>
      </Pressable>

      {/* Ingrediente 8 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible8}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible8);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Informações do ingrediente:</Text>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText8}
                placeholder='Nome'
                value={nome8}
              />

            <SelectDropdown
              data={tiposUnidades}
              onSelect={(selectedItem, index) => {
                unidades[8] = selectedItem;
                console.log(unidades)
              }}
              defaultButtonText={"Gramas"}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown}
          />

              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber8}
                value={qtd8}
                placeholder="Quantidade"
                keyboardType="numeric"
              />
            </SafeAreaView>



            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible8(!modalVisible8)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible8(true)}
      >
        <Text style={styles.textStyle}>{nome8}</Text>
      </Pressable>

      {/* Ingrediente 9 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible9}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible9);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Informações do ingrediente:</Text>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText9}
                placeholder='Nome'
                value={nome9}
              />

            <SelectDropdown
              data={tiposUnidades}
              onSelect={(selectedItem, index) => {
                unidades[9] = selectedItem;
                console.log(unidades)
              }}
              defaultButtonText={"Gramas"}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown}
          />

              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber9}
                value={qtd9}
                placeholder="Quantidade"
                keyboardType="numeric"
              />
            </SafeAreaView>



            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible9(!modalVisible9)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible9(true)}
      >
        <Text style={styles.textStyle}>{nome9}</Text>
      </Pressable>

      {/* Ingrediente 10 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible10}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible10);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Informações do ingrediente:</Text>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText10}
                placeholder='Nome'
                value={nome10}
              />

            <SelectDropdown
              data={tiposUnidades}
              onSelect={(selectedItem, index) => {
                unidades[10] = selectedItem;
                console.log(unidades)
              }}
              defaultButtonText={"Gramas"}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown}
          />

              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber10}
                value={qtd10}
                placeholder="Quantidade"
                keyboardType="numeric"
              />
            </SafeAreaView>



            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible10(!modalVisible10)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible10(true)}
      >
        <Text style={styles.textStyle}>{nome10}</Text>
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
              backgroundColor:"#507DBC"
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
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 40,

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
    padding: 15,
    elevation: 2,
    width: '60%'
  },
  buttonOpen: {
    backgroundColor: "#A1C6EA",
  },
  buttonClose: {
    backgroundColor: "#BBD1EA",
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
  dropdown: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 2,
  }
});