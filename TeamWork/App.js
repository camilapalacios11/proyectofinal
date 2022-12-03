import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Tapiz1 from "./src/components/Tapiz1"
import Todo from "./src/components/Todo"

//NAVEGADOR 
import Navigation from './Navigation';
import { Component } from 'react/cjs/react.production.min';

//panatalla medida
const alto = Dimensions.get ('window').height
const ancho = Dimensions.get ('window').width

export default function App() {
  
  return (
    //<Tapiz1/>
    <View>
      <View 
      style = {{
        backgroundColor: "rgba(247, 242, 201, 0.1)",
        height: alto /5,
        width: 100,
      }}>
        <Text>
          REPERTORIO
        </Text>
      </View>

        <Todo/>

    </View>
    

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


