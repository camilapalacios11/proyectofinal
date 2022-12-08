import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { initializeApp } from "@firebase/app";
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
i//mport firebaseConfig from "../../firebase"
import image from '../images/tapiz3.png'

const Tapiz3 = () => {   
    
    return (
        <View style = {style.cuadro}>

            <ImageBackground source = {image} resizeMode = 'cover' style = {style.papel}>



            </ImageBackground>            
            
        </View>
    )
}
export default Tapiz3

const style = StyleSheet.create( {

    viewcont: {
        flex: 1
    },
    contenedor: {
        width: 305,
        flexDirection: "row",
        marginTop: 50,
    },
    papel: {
        flex: 1, 
        backgroundColor: '#F7F2C9',
        alignItems: 'center',
        justifyContent: 'center'
    },
  
})