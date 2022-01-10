import {
  Alert,
  Modal,
  Pressable,
  Text,
  TextInput,
  SafeAreaView,
  View
} from 'react-native';
import React,{useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown'
import { styles } from "../estilos/styles";


export function TelaPrecos({navigation, route}){
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