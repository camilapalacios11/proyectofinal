import { Dimensions, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { initializeApp } from "@firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../../firebase"

const alto = Dimensions.get ('window').height
const ancho = Dimensions.get ('window').width

const Todo = () => {


    return (
        <View style = {style.cuadro}>
            <Text style = {style.letras}>
                TO DO
            </Text>
            <Text style = {style.letras}>
                PROCESO
            </Text>
            <Text style = {style.letras}>
                PRUEBA
            </Text>
            <Text style = {style.letras}>
                HECHO
            </Text>
        </View>
    )
}
export default Todo

const style = StyleSheet.create( {
    
    cuadro: {
        backgroundColor: "#022649",
        width: 100,
        height: (alto / 5)*4,
        alignItems: "flex-end",
        
        //borderBottomEndRadius: 20,
        //borderBottomStartRadius: 20, 
    },
    letras:{
        marginBottom: 50,
        marginTop: 100,
        marginLeft: 20,
        color: "white",
        textAlign: "left",
        transform: [{ rotate: '-90deg'}]
    },
    inpunt: {
        paddingLeft: 20,
        marginLeft: 10,
        borderRadius: 20,
        backgroundColor: "rgba(247, 242, 201, 0.1)",
        width: 282,
        height: 40,
        color: "white",

    },
    send:{
        borderRadius: 20,
        backgroundColor: "rgba(255, 58, 46, 0.6)",
        width: 100,
        height: 40,
        textAlign: "center",
        paddingTop: 10,
        marginTop: 35,
        marginLeft: 100,
    }
})