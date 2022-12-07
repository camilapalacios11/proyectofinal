import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { initializeApp } from "@firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../../firebase"

const Login = () => {   
    
    return (
        <View style = {style.cuadro}>
            
        </View>
    )
}
export default Login

const style = StyleSheet.create( {

    cuadro: {
        backgroundColor: "#022649",
        width: 305,
        height: 200,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20, 
    },
    letras:{
        marginBottom: ,
        marginTop: ,
        marginLeft: ,
        color: "",
        textAlign: ""
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
  
})