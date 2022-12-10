import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Tapiz2 from "./src/components/Tapiz2"
import Tapiz3 from './src/components/Tapiz3';
import Add from './src/components/Add';


//NAVEGADOR 
import Navigation from './Navigation';
import { Component } from 'react/cjs/react.production.min';
import Todo from './src/components/Todo';

//panatalla medida
const alto = Dimensions.get ('window').height
const ancho = Dimensions.get ('window').width


export default function App() {
  
  return (
  
    <Tapiz3/>  
  );
}




/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */


