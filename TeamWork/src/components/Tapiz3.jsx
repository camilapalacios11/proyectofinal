import { View, Text, Dimensions, TextInput, StyleSheet, TouchableOpacity, ImageBackground, } from 'react-native';
import React, { useState } from 'react';
import { initializeApp } from "@firebase/app";
import FloatingButton from './FloatingButton';
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//import firebaseConfig from "../../firebase"
import image from '../images/proyectos.png'
import firebaseConfig from "../../firebase"
import { getFirestore } from "firebase/firestore"
import { collection, getDocs } from "firebase/firestore";


//medidas 
const alto = Dimensions.get('window').height
const ancho = Dimensions.get('window').width
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const Tapiz3 = () => {
  const [listApp, setListApp] = useState([])
  const nuevaCarpeta = async () => {
    const querySnapshot = await getDocs(collection(db, "grupos"));
    querySnapshot.forEach((doc) => {
      setListApp([doc.data()])
    });
    console.log(listApp)
  }

  nuevaCarpeta()
  return (
    <View style={styles.container}>

      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {
          listApp.map(() => {})
        }
        <FloatingButton />
      </ImageBackground>
    </View>

  )

}
export default Tapiz3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5F3DE",

  },
  boxTeam: {
    height: 170,
    width: (ancho - 20) / 3,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    marginLeft: 5,
  },
  divTeam: {
    marginTop: -350,
    marginLeft: 10,
  }

});