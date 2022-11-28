import { View, Text, TextInput, StyleSheet } from 'react-native';
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
            <Text style = {style.letras}>
                ENTRAR
            </Text>
        </View>
    )
}
export default Login

const style = StyleSheet.create( {

    cuadro: {
        backgroundColor: "#022649",
        width: 305,
        height: 228,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20, 
        alignItems: "center",
    },
    letras:{
        marginRight: 200,
        marginTop: 20,
        color: "white",
        textAlign: "left"
    },
    inpunt: {
        borderRadius: 20,
        backgroundColor: "rgba(247, 242, 201, 0.1)",
        width: 282,
        height: 40,
        

    }


})