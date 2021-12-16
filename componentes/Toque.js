import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableHighlight, TouchabyleOpacit, TouchableOpacity} from 'react-native'

export default function(){

    const [cont, setCont]=useState(0)
    const contar=()=>{
        setCont(cont+1)
    }
    return(
        <View>
            <TouchableHighlight 
                style={estilos.botao}
                onPress={contar}
                underlayColor="#008"
            >
                <Text>CFB Cursos</Text>
            </TouchableHighlight>

            <TouchableOpacity 
                style={estilos.botao}
                onPress={contar}
                underlayColor="#008"
            >
                <Text>CFB Cursos</Text>
            </TouchableOpacity>

            <Text>Cont: {cont}</Text>
        </View>
    )
}


const estilos = StyleSheet.create({
    botao:{
        alignItems:"center",
        backgroundColor:'#ccc',
        padding:10
    }
})