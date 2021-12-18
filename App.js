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


function TelaIngredientes({navigation, route}){
  const tiposUnidades = ["Gramas", "Quilogramas", "Mililitros", "Litros"]
  const unidades = []
  const nomes = route.params.nomes
  const quantidades = []

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
  

  quantidades[1] = qtd1;
  quantidades[2] = qtd2;
  quantidades[3] = qtd3;
  quantidades[4] = qtd4;
  quantidades[5] = qtd5;
  quantidades[6] = qtd6;
  quantidades[7] = qtd7;
  quantidades[8] = qtd8;
  quantidades[9] = qtd9;
  quantidades[10] = qtd10;
 
  return(
    <View style={{flex: 1}}>
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
      

      <View style={styles.centeredCalcula}>
        <Pressable
            style={[styles.buttonCalcula, styles.buttonOpenCalcula]}
            color="#000"
            onPress={()=>navigation.navigate("Calcula", {nomes: nomes, quantidades: quantidades, unidades: unidades})}
            >

            <Text style={styles.textStyle}>Calcular</Text>
        </Pressable>
      </View>
    </View>
  )
}



function TelaPrecos({navigation, route}){
  const tiposUnidades = ["Gramas", "Quilogramas", "Mililitros", "Litros"]
  const unidades = []
  const nomes = []
  const quantidades = []
  const precos = []
  const precosQtd = []

  const [modalVisible1, setModalVisible1] = useState(false);
  const [qtd1, onChangeNumber1] = React.useState(null);
  const [nome1, onChangeText1] = React.useState("Ingrediente 1");
  const [preco1, onChangePreco1] = React.useState("");

  const [modalVisible2, setModalVisible2] = useState(false);
  const [qtd2, onChangeNumber2] = React.useState(null);
  const [nome2, onChangeText2] = React.useState("Ingrediente 2");
  const [preco2, onChangePreco2] = React.useState("");

  const [modalVisible3, setModalVisible3] = useState(false);
  const [qtd3, onChangeNumber3] = React.useState(null);
  const [nome3, onChangeText3] = React.useState("Ingrediente 3");
  const [preco3, onChangePreco3] = React.useState("");

  const [modalVisible4, setModalVisible4] = useState(false);
  const [qtd4, onChangeNumber4] = React.useState(null);
  const [nome4, onChangeText4] = React.useState("Ingrediente 4");
  const [preco4, onChangePreco4] = React.useState("");

  const [modalVisible5, setModalVisible5] = useState(false);
  const [qtd5, onChangeNumber5] = React.useState(null);
  const [nome5, onChangeText5] = React.useState("Ingrediente 5");
  const [preco5, onChangePreco5] = React.useState("");

  const [modalVisible6, setModalVisible6] = useState(false);
  const [qtd6, onChangeNumber6] = React.useState(null);
  const [nome6, onChangeText6] = React.useState("Ingrediente 6");
  const [preco6, onChangePreco6] = React.useState("");

  const [modalVisible7, setModalVisible7] = useState(false);
  const [qtd7, onChangeNumber7] = React.useState(null);
  const [nome7, onChangeText7] = React.useState("Ingrediente 7");
  const [preco7, onChangePreco7] = React.useState("");

  const [modalVisible8, setModalVisible8] = useState(false);
  const [qtd8, onChangeNumber8] = React.useState(null);
  const [nome8, onChangeText8] = React.useState("Ingrediente 8");
  const [preco8, onChangePreco8] = React.useState("");

  const [modalVisible9, setModalVisible9] = useState(false);
  const [qtd9, onChangeNumber9] = React.useState(null);
  const [nome9, onChangeText9] = React.useState("Ingrediente 9");
  const [preco9, onChangePreco9] = React.useState("");

  const [modalVisible10, setModalVisible10] = useState(false);
  const [qtd10, onChangeNumber10] = React.useState(null);
  const [nome10, onChangeText10] = React.useState("Ingrediente 10");
  const [preco10, onChangePreco10] = React.useState("");

  nomes[1] = nome1;
  nomes[2] = nome2;
  nomes[3] = nome3;
  nomes[4] = nome4;
  nomes[5] = nome5;
  nomes[6] = nome6;
  nomes[7] = nome7;
  nomes[8] = nome8;
  nomes[9] = nome9;
  nomes[10] = nome10;

  precosQtd[1] = preco1 / qtd1;
  precosQtd[2] = preco2 / qtd2;
  precosQtd[3] = preco3 / qtd3;
  precosQtd[4] = preco4 / qtd4;
  precosQtd[5] = preco5 / qtd5;
  precosQtd[6] = preco6 / qtd6;
  precosQtd[7] = preco7 / qtd7;
  precosQtd[8] = preco8 / qtd8;
  precosQtd[9] = preco9 / qtd9;
  precosQtd[10] = preco10 / qtd10;
 
  return(
    <View style={{flex: 1}}>
      <View style={styles.centeredView}>
        {/* Ingrediente 1 */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible1}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible1(!modalVisible1);
          }}
        >
          <View style={styles.centeredViewModal}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Informações do ingrediente:</Text>
              <SafeAreaView>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeText1}
                  placeholder='Nome'
                  value={nome1}
                />

                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber1}
                  value={qtd1}
                  placeholder="Quantidade"
                  keyboardType="numeric"
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
                onChangeText={onChangePreco1}
                value={preco1}
                placeholder="Preco"
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
          animationType="fade"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible2(!modalVisible2);
          }}
        >
          <View style={styles.centeredViewModal}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Informações do ingrediente:</Text>
              <SafeAreaView>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeText2}
                  placeholder='Nome'
                  value={nome2}
                />

                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber2}
                  value={qtd2}
                  placeholder="Quantidade"
                  keyboardType="numeric"
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
                onChangeText={onChangePreco2}
                value={preco2}
                placeholder="Preco"
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
          animationType="fade"
          transparent={true}
          visible={modalVisible3}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible3(!modalVisible3);
          }}
        >
          <View style={styles.centeredViewModal}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Informações do ingrediente:</Text>
              <SafeAreaView>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeText3}
                  placeholder='Nome'
                  value={nome3}
                />

                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber3}
                  value={qtd3}
                  placeholder="Quantidade"
                  keyboardType="numeric"
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
                onChangeText={onChangePreco3}
                value={preco3}
                placeholder="Preco"
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
          animationType="fade"
          transparent={true}
          visible={modalVisible4}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible4(!modalVisible4);
          }}
        >
          <View style={styles.centeredViewModal}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Informações do ingrediente:</Text>
              <SafeAreaView>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeText4}
                  placeholder='Nome'
                  value={nome4}
                />

                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber4}
                  value={qtd4}
                  placeholder="Quantidade"
                  keyboardType="numeric"
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
                onChangeText={onChangePreco4}
                value={preco4}
                placeholder="Preco"
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
          animationType="fade"
          transparent={true}
          visible={modalVisible5}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible5(!modalVisible5);
          }}
        >
          <View style={styles.centeredViewModal}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Informações do ingrediente:</Text>
              <SafeAreaView>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeText5}
                  placeholder='Nome'
                  value={nome5}
                />

                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber5}
                  value={qtd5}
                  placeholder="Quantidade"
                  keyboardType="numeric"
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
                onChangeText={onChangePreco5}
                value={preco5}
                placeholder="Preco"
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
          animationType="fade"
          transparent={true}
          visible={modalVisible6}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible6(!modalVisible6);
          }}
        >
          <View style={styles.centeredViewModal}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Informações do ingrediente:</Text>
              <SafeAreaView>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeText6}
                  placeholder='Nome'
                  value={nome6}
                />

                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber6}
                  value={qtd6}
                  placeholder="Quantidade"
                  keyboardType="numeric"
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
                onChangeText={onChangePreco6}
                value={preco6}
                placeholder="Preco"
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
          animationType="fade"
          transparent={true}
          visible={modalVisible7}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible7(!modalVisible7);
          }}
        >
          <View style={styles.centeredViewModal}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Informações do ingrediente:</Text>
              <SafeAreaView>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeText7}
                  placeholder='Nome'
                  value={nome7}
                />

                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber7}
                  value={qtd7}
                  placeholder="Quantidade"
                  keyboardType="numeric"
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
                onChangeText={onChangePreco7}
                value={preco7}
                placeholder="Preco"
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
          animationType="fade"
          transparent={true}
          visible={modalVisible8}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible8(!modalVisible8);
          }}
        >
          <View style={styles.centeredViewModal}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Informações do ingrediente:</Text>
              <SafeAreaView>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeText8}
                  placeholder='Nome'
                  value={nome8}
                />

                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber8}
                  value={qtd8}
                  placeholder="Quantidade"
                  keyboardType="numeric"
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
                onChangeText={onChangePreco8}
                value={preco8}
                placeholder="Preco"
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
          animationType="fade"
          transparent={true}
          visible={modalVisible9}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible9(!modalVisible9);
          }}
        >
          <View style={styles.centeredViewModal}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Informações do ingrediente:</Text>
              <SafeAreaView>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeText9}
                  placeholder='Nome'
                  value={nome9}
                />

                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber9}
                  value={qtd9}
                  placeholder="Quantidade"
                  keyboardType="numeric"
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
                onChangeText={onChangePreco9}
                value={preco9}
                placeholder="Preco"
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
          animationType="fade"
          transparent={true}
          visible={modalVisible10}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible10(!modalVisible10);
          }}
        >
          <View style={styles.centeredViewModal}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Informações do ingrediente:</Text>
              <SafeAreaView>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeText10}
                  placeholder='Nome'
                  value={nome10}
                />

                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber10}
                  value={qtd10}
                  placeholder="Quantidade"
                  keyboardType="numeric"
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
                onChangeText={onChangePreco10}
                value={preco10}
                placeholder="Preco"
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
      

      <View style={styles.centeredCalcula}>
        <Pressable
            style={[styles.buttonCalcula, styles.buttonOpenCalcula]}
            color="#000"
            onPress={()=>navigation.navigate("Ingredientes", {nomes: nomes, precosQtd: precosQtd})}
            >

            <Text style={styles.textStyle}>Próximo</Text>
        </Pressable>
      </View>
    </View>
  )
}




function TelaCalcula({navigation, route}){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Tela Home</Text>
      <Button
        title={route.params.nomes[1]}
        onPress={()=>navigation.navigate('CursoReactNative',{
          aulas:100, autor:'Bruno'
        })}
      />
    </View>
  )
}

export default function App1(){
  
  return (
    <NavigationContainer>
      <Pilha.Navigator initialRouteName="Precos">
        <Pilha.Screen 
          name="Precos"
          component={TelaPrecos}
          options={({ navigation }) => ({
            title:'Quantidades e preços',
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
            title:'Quantidades receita',
            headerStyle:{
              backgroundColor:"#507DBC"
            },
            headerTintColor:"#000",
            headerTitleStyle:{
              fontWeight:'bold'
            },
            headerRight:()=>(
              <Button
                title="Calcula"
                color="#000"
                onPress={()=>navigation.navigate("Calcula")}
              />
            )
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 5, 
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 0,
  },
  centeredViewModal: {
    backgroundColor: 'rgba(100,100,100, 0.5)',
    flex: 5, 
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 0,
  },
  centeredCalcula: {
    flex: 1, 
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 0,
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
    backgroundColor: "#BBD1EA",
  },
  buttonCalcula: {
    borderRadius: 20,
    padding: 15,
    elevation: 2,
    width: '80%'
  },
  buttonOpenCalcula: {
    backgroundColor: "#A1C6EA",
  },
  buttonClose: {
    backgroundColor: "#BBD1EA",
  },
  textStyle: {
    color: "black",
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