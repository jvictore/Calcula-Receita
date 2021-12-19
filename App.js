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


function isGrama(unidade){
  if (unidade == "Gramas" || unidade == "Quilogramas")
    return true;
  else
    return false;
}


function calculaPreco(precoUnidade, qtd, unidadeTotal, unidade){
  console.log("comeca:")
  console.log(precoUnidade)
  console.log(qtd)
  console.log(unidadeTotal)
  console.log(unidade)

  if (unidade == ""){
    return 0;
  }
  if (unidadeTotal == unidade){
    return precoUnidade * qtd;
  }
  
  if (unidadeTotal == "Quilogramas"){
    qtd = qtd / 1000;
  } else if (unidadeTotal == "Gramas"){
    qtd = qtd * 1000;
  } else if (unidadeTotal == "Litros"){
    qtd = qtd / 1000;
  } else if (unidadeTotal == "Mililitros"){
    qtd = qtd * 1000;
  }
  return precoUnidade * qtd;
}


function TelaPrecos({navigation, route}){
  const tiposUnidades = ["Gramas", "Quilogramas", "Mililitros", "Litros"]
  const unidades = ["GRafsamas", "qgrge"]
  const nomes = []
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

  const [value1,setValue1]=useState('');
  const handleSelect1=(e)=>{
    console.log(e);
    setValue1(e)
  }

  const [value2,setValue2]=useState('');
  const handleSelect2=(e)=>{
    console.log(e);
    setValue2(e)
  }

  const [value3,setValue3]=useState('');
  const handleSelect3=(e)=>{
    console.log(e);
    setValue3(e)
  }

  const [value4,setValue4]=useState('');
  const handleSelect4=(e)=>{
    console.log(e);
    setValue4(e)
  }

  const [value5,setValue5]=useState('');
  const handleSelect5=(e)=>{
    console.log(e);
    setValue5(e)
  }

  const [value6,setValue6]=useState('');
  const handleSelect6=(e)=>{
    console.log(e);
    setValue6(e)
  }

  const [value7,setValue7]=useState('');
  const handleSelect7=(e)=>{
    console.log(e);
    setValue7(e)
  }

  const [value8,setValue8]=useState('');
  const handleSelect8=(e)=>{
    console.log(e);
    setValue8(e)
  }

  const [value9,setValue9]=useState('');
  const handleSelect9=(e)=>{
    console.log(e);
    setValue9(e)
  }

  const [value10,setValue10]=useState('');
  const handleSelect10=(e)=>{
    console.log(e);
    setValue10(e)
  }

  unidades[1] = value1
  unidades[2] = value2
  unidades[3] = value3
  unidades[4] = value4
  unidades[5] = value5
  unidades[6] = value6
  unidades[7] = value7
  unidades[8] = value8
  unidades[9] = value9
  unidades[10] = value10

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
                  onSelect={handleSelect1}
                  defaultButtonText={""}
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
                onPress={() => {setModalVisible1(!modalVisible1)}
              }
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
          <Text style={styles.textStyle}>{nomes[1]}</Text>
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
                  onSelect={handleSelect2}
                  defaultButtonText={""}
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
                  onSelect={handleSelect3}
                  defaultButtonText={""}
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
                  onSelect={handleSelect4}
                  defaultButtonText={""}
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
                  onSelect={handleSelect5}
                  defaultButtonText={""}
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
                  onSelect={handleSelect6}
                  defaultButtonText={""}
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
                  onSelect={handleSelect7}
                  defaultButtonText={""}
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
                  onSelect={handleSelect8}
                  defaultButtonText={""}
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
                  onSelect={handleSelect9}
                  defaultButtonText={""}
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
                  onSelect={handleSelect10}
                  defaultButtonText={""}
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
            onPress={()=>navigation.navigate("Ingredientes", {nomes: nomes, precosQtd: precosQtd, unidadesTotal: unidades})}
            >

            <Text style={styles.textStyle}>Próximo</Text>
        </Pressable>
      </View>
    </View>
  )
}


function TelaIngredientes({navigation, route}){
  
  const [value1,setValue1]=useState('');
  const handleSelect1=(e)=>{
    console.log(e);
    setValue1(e)
  }

  const [value2,setValue2]=useState('');
  const handleSelect2=(e)=>{
    console.log(e);
    setValue2(e)
  }

  const [value3,setValue3]=useState('');
  const handleSelect3=(e)=>{
    console.log(e);
    setValue3(e)
  }

  const [value4,setValue4]=useState('');
  const handleSelect4=(e)=>{
    console.log(e);
    setValue4(e)
  }

  const [value5,setValue5]=useState('');
  const handleSelect5=(e)=>{
    console.log(e);
    setValue5(e)
  }

  const [value6,setValue6]=useState('');
  const handleSelect6=(e)=>{
    console.log(e);
    setValue6(e)
  }

  const [value7,setValue7]=useState('');
  const handleSelect7=(e)=>{
    console.log(e);
    setValue7(e)
  }

  const [value8,setValue8]=useState('');
  const handleSelect8=(e)=>{
    console.log(e);
    setValue8(e)
  }

  const [value9,setValue9]=useState('');
  const handleSelect9=(e)=>{
    console.log(e);
    setValue9(e)
  }

  const [value10,setValue10]=useState('');
  const handleSelect10=(e)=>{
    console.log(e);
    setValue10(e)
  }

  const tiposUnidadesGramas = ["Gramas", "Quilogramas"]
  const tiposUnidadesLitros = ["Mililitros", "Litros"]

  const unidadesTotal = route.params.unidadesTotal
  const precosUnidade = route.params.precosQtd
  const nomes = route.params.nomes

  const unidades = []
  const quantidades = []
  const precos = []

  
  

  const [modalVisible1, setModalVisible1] = useState(false);
  const [qtd1, onChangeNumber1] = React.useState(null);

  const [modalVisible2, setModalVisible2] = useState(false);
  const [qtd2, onChangeNumber2] = React.useState(null);

  const [modalVisible3, setModalVisible3] = useState(false);
  const [qtd3, onChangeNumber3] = React.useState(null);

  const [modalVisible4, setModalVisible4] = useState(false);
  const [qtd4, onChangeNumber4] = React.useState(null);

  const [modalVisible5, setModalVisible5] = useState(false);
  const [qtd5, onChangeNumber5] = React.useState(null);

  const [modalVisible6, setModalVisible6] = useState(false);
  const [qtd6, onChangeNumber6] = React.useState(null);

  const [modalVisible7, setModalVisible7] = useState(false);
  const [qtd7, onChangeNumber7] = React.useState(null);

  const [modalVisible8, setModalVisible8] = useState(false);
  const [qtd8, onChangeNumber8] = React.useState(null);

  const [modalVisible9, setModalVisible9] = useState(false);
  const [qtd9, onChangeNumber9] = React.useState(null);

  const [modalVisible10, setModalVisible10] = useState(false);
  const [qtd10, onChangeNumber10] = React.useState(null);

  unidades[1] = value1
  unidades[2] = value2
  unidades[3] = value3
  unidades[4] = value4
  unidades[5] = value5
  unidades[6] = value6
  unidades[7] = value7
  unidades[8] = value8
  unidades[9] = value9
  unidades[10] = value10

  precos[1] = calculaPreco(precosUnidade[1], qtd1, unidadesTotal[1], unidades[1])
  precos[2] = calculaPreco(precosUnidade[2], qtd2, unidadesTotal[2], unidades[2])
  precos[3] = calculaPreco(precosUnidade[3], qtd3, unidadesTotal[3], unidades[3])
  precos[4] = calculaPreco(precosUnidade[4], qtd4, unidadesTotal[4], unidades[4])
  precos[5] = calculaPreco(precosUnidade[5], qtd5, unidadesTotal[5], unidades[5])
  precos[6] = calculaPreco(precosUnidade[6], qtd6, unidadesTotal[6], unidades[6])
  precos[7] = calculaPreco(precosUnidade[7], qtd7, unidadesTotal[7], unidades[7])
  precos[8] = calculaPreco(precosUnidade[8], qtd8, unidadesTotal[8], unidades[8])
  precos[9] = calculaPreco(precosUnidade[9], qtd9, unidadesTotal[9], unidades[9])
  precos[10] = calculaPreco(precosUnidade[10], qtd10, unidadesTotal[10], unidades[10])
 
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
              <Text style={styles.modalText}>Quantidade usada na receita:</Text>
              <SafeAreaView>
                <Text
                  style={styles.input}
                >{nomes[1]}</Text>
                
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber1}
                  value={qtd1}
                  placeholder="Quantidade"
                  keyboardType="numeric"
                />

                {(isGrama(unidadesTotal[1])
                    ? <SelectDropdown
                        data={tiposUnidadesGramas}
                        onSelect={handleSelect1}
                        defaultButtonText={""}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                          return item;
                        }}
                        buttonStyle={styles.dropdown}
                      />    
                    : <SelectDropdown
                        data={tiposUnidadesLitros}
                        onSelect={handleSelect1}
                        defaultButtonText={""}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                          return item;
                        }}
                        buttonStyle={styles.dropdown}
                      />
                )}

                <Text style={styles.input}>
                  R${precos[1]}</Text>

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
          <Text style={styles.textStyle}>{nomes[1]}</Text>
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
              <Text style={styles.modalText}>Quantidade usada na receita:</Text>
              <SafeAreaView>
                <Text
                  style={styles.input}
                >{nomes[2]}</Text>
                
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber2}
                  value={qtd2}
                  placeholder="Quantidade"
                  keyboardType="numeric"
                />

                {(isGrama(unidadesTotal[2])
                    ? <SelectDropdown
                        data={tiposUnidadesGramas}
                        onSelect={handleSelect2}
                        defaultButtonText={""}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                          return item;
                        }}
                        buttonStyle={styles.dropdown}
                      />    
                    : <SelectDropdown
                        data={tiposUnidadesLitros}
                        onSelect={handleSelect2}
                        defaultButtonText={""}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                          return item;
                        }}
                        buttonStyle={styles.dropdown}
                      />
                )}

                <Text style={styles.input}>
                  R${precos[2]}</Text>

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
          <Text style={styles.textStyle}>{nomes[2]}</Text>
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
              <Text style={styles.modalText}>Quantidade usada na receita:</Text>
              <SafeAreaView>
                <Text
                  style={styles.input}
                >{nomes[3]}</Text>
                
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber3}
                  value={qtd3}
                  placeholder="Quantidade"
                  keyboardType="numeric"
                />

                {(isGrama(unidadesTotal[3])
                    ? <SelectDropdown
                        data={tiposUnidadesGramas}
                        onSelect={handleSelect3}
                        defaultButtonText={""}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                          return item;
                        }}
                        buttonStyle={styles.dropdown}
                      />    
                    : <SelectDropdown
                        data={tiposUnidadesLitros}
                        onSelect={handleSelect3}
                        defaultButtonText={""}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                          return item;
                        }}
                        buttonStyle={styles.dropdown}
                      />
                )}

                <Text style={styles.input}>
                  R${precos[3]}</Text>

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
          <Text style={styles.textStyle}>{nomes[3]}</Text>
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
              <Text style={styles.modalText}>Quantidade usada na receita:</Text>
              <SafeAreaView>
                <Text
                  style={styles.input}
                >{nomes[4]}</Text>
                
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber4}
                  value={qtd4}
                  placeholder="Quantidade"
                  keyboardType="numeric"
                />

                {(isGrama(unidadesTotal[4])
                    ? <SelectDropdown
                        data={tiposUnidadesGramas}
                        onSelect={handleSelect4}
                        defaultButtonText={""}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                          return item;
                        }}
                        buttonStyle={styles.dropdown}
                      />    
                    : <SelectDropdown
                        data={tiposUnidadesLitros}
                        onSelect={handleSelect4}
                        defaultButtonText={""}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                          return item;
                        }}
                        buttonStyle={styles.dropdown}
                      />
                )}

                <Text style={styles.input}>
                  R${precos[4]}</Text>

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
          <Text style={styles.textStyle}>{nomes[4]}</Text>
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
              <Text style={styles.modalText}>Quantidade usada na receita:</Text>
              <SafeAreaView>
                <Text
                  style={styles.input}
                >{nomes[5]}</Text>
                
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber5}
                  value={qtd5}
                  placeholder="Quantidade"
                  keyboardType="numeric"
                />

                {(isGrama(unidadesTotal[5])
                    ? <SelectDropdown
                        data={tiposUnidadesGramas}
                        onSelect={handleSelect5}
                        defaultButtonText={""}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                          return item;
                        }}
                        buttonStyle={styles.dropdown}
                      />    
                    : <SelectDropdown
                        data={tiposUnidadesLitros}
                        onSelect={handleSelect5}
                        defaultButtonText={""}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                          return item;
                        }}
                        buttonStyle={styles.dropdown}
                      />
                )}

                <Text style={styles.input}>
                  R${precos[5]}</Text>

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
          <Text style={styles.textStyle}>{nomes[5]}</Text>
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
              <Text style={styles.modalText}>Quantidade usada na receita:</Text>
              <SafeAreaView>
                <Text
                  style={styles.input}
                >{nomes[6]}</Text>
                
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber6}
                  value={qtd6}
                  placeholder="Quantidade"
                  keyboardType="numeric"
                />

                {(isGrama(unidadesTotal[6])
                    ? <SelectDropdown
                        data={tiposUnidadesGramas}
                        onSelect={handleSelect6}
                        defaultButtonText={""}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                          return item;
                        }}
                        buttonStyle={styles.dropdown}
                      />    
                    : <SelectDropdown
                        data={tiposUnidadesLitros}
                        onSelect={handleSelect6}
                        defaultButtonText={""}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                          return item;
                        }}
                        buttonStyle={styles.dropdown}
                      />
                )}

                <Text style={styles.input}>
                  R${precos[6]}</Text>

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
          <Text style={styles.textStyle}>{nomes[6]}</Text>
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
              <Text style={styles.modalText}>Quantidade usada na receita:</Text>
              <SafeAreaView>
                <Text
                  style={styles.input}
                >{nomes[7]}</Text>
                
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber7}
                  value={qtd7}
                  placeholder="Quantidade"
                  keyboardType="numeric"
                />

                {(isGrama(unidadesTotal[7])
                    ? <SelectDropdown
                        data={tiposUnidadesGramas}
                        onSelect={handleSelect7}
                        defaultButtonText={""}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                          return item;
                        }}
                        buttonStyle={styles.dropdown}
                      />    
                    : <SelectDropdown
                        data={tiposUnidadesLitros}
                        onSelect={handleSelect7}
                        defaultButtonText={""}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                          return item;
                        }}
                        buttonStyle={styles.dropdown}
                      />
                )}

                <Text style={styles.input}>
                  R${precos[7]}</Text>

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
          <Text style={styles.textStyle}>{nomes[7]}</Text>
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
              <Text style={styles.modalText}>Quantidade usada na receita:</Text>
              <SafeAreaView>
                <Text
                  style={styles.input}
                >{nomes[8]}</Text>
                
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber8}
                  value={qtd8}
                  placeholder="Quantidade"
                  keyboardType="numeric"
                />

                {(isGrama(unidadesTotal[8])
                    ? <SelectDropdown
                        data={tiposUnidadesGramas}
                        onSelect={handleSelect8}
                        defaultButtonText={""}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                          return item;
                        }}
                        buttonStyle={styles.dropdown}
                      />    
                    : <SelectDropdown
                        data={tiposUnidadesLitros}
                        onSelect={handleSelect8}
                        defaultButtonText={""}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                          return item;
                        }}
                        buttonStyle={styles.dropdown}
                      />
                )}

                <Text style={styles.input}>
                  R${precos[8]}</Text>

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
          <Text style={styles.textStyle}>{nomes[8]}</Text>
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
              <Text style={styles.modalText}>Quantidade usada na receita:</Text>
              <SafeAreaView>
                <Text
                  style={styles.input}
                >{nomes[9]}</Text>
                
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber9}
                  value={qtd9}
                  placeholder="Quantidade"
                  keyboardType="numeric"
                />

                {(isGrama(unidadesTotal[9])
                    ? <SelectDropdown
                        data={tiposUnidadesGramas}
                        onSelect={handleSelect9}
                        defaultButtonText={""}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                          return item;
                        }}
                        buttonStyle={styles.dropdown}
                      />    
                    : <SelectDropdown
                        data={tiposUnidadesLitros}
                        onSelect={handleSelect9}
                        defaultButtonText={""}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                          return item;
                        }}
                        buttonStyle={styles.dropdown}
                      />
                )}

                <Text style={styles.input}>
                  R${precos[9]}</Text>

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
          <Text style={styles.textStyle}>{nomes[9]}</Text>
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
              <Text style={styles.modalText}>Quantidade usada na receita:</Text>
              <SafeAreaView>
                <Text
                  style={styles.input}
                >{nomes[10]}</Text>
                
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber10}
                  value={qtd10}
                  placeholder="Quantidade"
                  keyboardType="numeric"
                />

                {(isGrama(unidadesTotal[10])
                    ? <SelectDropdown
                        data={tiposUnidadesGramas}
                        onSelect={handleSelect10}
                        defaultButtonText={""}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                          return item;
                        }}
                        buttonStyle={styles.dropdown}
                      />    
                    : <SelectDropdown
                        data={tiposUnidadesLitros}
                        onSelect={handleSelect10}
                        defaultButtonText={""}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                          return item;
                        }}
                        buttonStyle={styles.dropdown}
                      />
                )}

                <Text style={styles.input}>
                  R${precos[10]}</Text>

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
          <Text style={styles.textStyle}>{nomes[10]}</Text>
        </Pressable>


      </View>
      

      <View style={styles.centeredCalcula}>
        <Pressable
            style={[styles.buttonCalcula, styles.buttonOpenCalcula]}
            color="#000"
            onPress={()=>navigation.navigate("Calcula", {nomes: nomes, quantidades: quantidades, unidades: unidades, precos: precos})}
            >

            <Text style={styles.textStyle}>Calcular</Text>
        </Pressable>
      </View>
    </View>
  )
}


function TelaCalcula({navigation, route}){
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