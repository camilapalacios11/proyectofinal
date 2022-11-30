import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';


const Login = () => {
    return (
        <View style = {style.cuadro}>
            <Text style = {style.letras}>
                CORREO:
            </Text>
            <TextInput style = {style.inpunt}>
            </TextInput>
            <Text style = {style.letras}>
                CONTRASEÑA:
            </Text>
            <TextInput secureTextEntry = {true} style = {style.inpunt}>
            </TextInput>
            <TouchableOpacity>
                <Text style = {[style.letras, style.send]}>
                    ENTRAR
                </Text>
            </TouchableOpacity>
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
        fontFamily: "inter",
        fontWeight: "bold",
        fontStyle: "italic",
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
        marginTop: 55,
        marginLeft: 100,
    }
})