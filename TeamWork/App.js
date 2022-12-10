import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import Tapiz2 from "./src/components/Tapiz2"



//NAVEGADOR 
import Navigation from './Navigation';
import { Component } from 'react/cjs/react.production.min';
import Add from './src/components/Add';
import Todo from './src/components/Todo';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  
  return (
    <Navigation/>
    //<Tapiz2/>
    
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


