import { View, Text, Dimensions, TextInput, StyleSheet, TouchableOpacity, ImageBackground, } from 'react-native';
import React, { useState, useLayoutEffect } from 'react';
import { initializeApp } from "@firebase/app";
import FloatingButton from './FloatingButton';
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//import firebaseConfig from "../../firebase"
import image from '../images/proyectos.png'
import firebaseConfig from "../../firebase"
import { getFirestore } from "firebase/firestore"
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

//medidas 
const alto = Dimensions.get('window').height
const ancho = Dimensions.get('window').width
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const Tapiz3 = () => {

  const navigation = useNavigation();
  const [listApp, setListApp] = useState([])
  useLayoutEffect(() => {
    const  datos = onSnapshot(collection(db, "grupos"), (querySnapshot) => {
      setListApp([])
      querySnapshot.forEach((doc) => {
        setListApp((listApp) => [...listApp, {id: doc.id, ...doc.data()}])
      });
    });
    return datos
  }, [])
  return (
    <View style={styles.container}>

      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ScrollView style={styles.scroll}>
        <View style={styles.trabajos}>
        {
          listApp.map((item) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("Tareas", {id: item.id})}>
              <View style={styles.divTeam}>
                <View style={styles.boxTeam}>
                  
                </View>
                <Text>{item.nombre}</Text>
              </View>
              </TouchableOpacity>
            )
          })

        }
        </View>
        </ScrollView>
        <FloatingButton />

      </ImageBackground>
    </View>

  )

}
export default Tapiz3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  scroll: {

    marginTop: 150,
    borderRadius: 10,
    
    width: ancho,
    height: alto,
  },

  trabajos: {
    flexDirection: "row",
    flexWrap: "wrap",

    justifyContent: "center",
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
  

});