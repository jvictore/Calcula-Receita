import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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