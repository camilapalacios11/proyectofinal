import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { initializeApp } from "firebase/app";
//import firebaseConfig from "../../firebase"
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"


const Registrar = () => {
    const [NickName, setNickName] = useState("")   
    const [Correo, setCorreo] = useState("")
    const [Contrasena, setContrasena] = useState("")

    //const app = initializeApp(firebaseConfig);
    const agregarUsuario = () => {
        
    }
    return (
        <View style = {style.cuadro}>
            <Text style = {style.letras}>
                NICKNAME:
            </Text>
            <TextInput style = {style.inpunt}
            onChangeText= {(nick)=> setNickName(nick)}>
            </TextInput>
            <Text style = {style.letras}>
                CORREO:
            </Text>
            <TextInput style = {style.inpunt}
             onChangeText= {(correo)=> setCorreo(correo)}>
            </TextInput>
            <Text style = {style.letras}>
                CONTRASEÑA:
            </Text>
            <TextInput secureTextEntry = {true} style = {style.inpunt}
             onChangeText= {(contrasena)=> setContrasena(contrasena)}>
            </TextInput>
            <TouchableOpacity>
                <Text style = {[style.letras, style.send]}>
                    ENTRAR
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default Registrar

const style = StyleSheet.create( {

    cuadro: {
        backgroundColor: "#022649",
        width: 305,
        height: 260,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20, 
    },
    letras:{
        marginBottom: 2,
        marginTop: 20,
        marginLeft: 20,
        color: "white",
        textAlign: "left"
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