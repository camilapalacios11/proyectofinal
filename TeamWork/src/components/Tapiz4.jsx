import { View, Text, Dimensions, TextInput, StyleSheet, TouchableOpacity, ImageBackground, } from 'react-native';
import React, { useState, useLayoutEffect } from 'react';
import { initializeApp } from "@firebase/app";
import FloatingButton from './FloatingButton';
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//import firebaseConfig from "../../firebase"
import image from '../images/out.png'
import firebaseConfig from "../../firebase"
import { getFirestore } from "firebase/firestore"
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { ScrollView } from 'react-native-gesture-handler';

import { signOut } from 'firebase/auth';
import { getAuth } from 'firebase/auth';


import { useNavigation } from "@react-navigation/native";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);




const Tapiz4 = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}> 
        <View style= {{
            marginLeft: 50,
            marginTop: 200,
        }}>

            <Text style={{
                fontSize: 30, 
                fontStyle: "italic",
                fontWeight: "bold",
                color: "#F5F5F5",

            }}> CERRAR SESION </Text>
            <TouchableOpacity
            onPress={
                () =>{
                    const auth = getAuth();
                    signOut(auth)
                    navigation.navigate("Tapiz1")
                }
            }
            >
                <Text style={styles.send}>SALIR</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
    </View>

  )

}
export default Tapiz4;

const styles = StyleSheet.create({
    send: {
        backgroundColor: "#FD5F51",
        textAlign: "center",  
        color: "#F5F3DE", 
        height: 30,
        width: 80,
        borderRadius: 10,
        marginTop: 10,
        paddingTop: 2,
        fontSize: 20,
        fontStyle: "italic",
        fontWeight: 'bold',
    },
    image: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#F5F3DE",
    
      },
      container: {
        flex: 1,
        
      },
  
});