import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Button,  ScrollView, Image,
     TextInput} from 'react-native';

import Tarjeta from './Tarjeta';
import close from '../images/X.png'
import ModalInput from './ModalInput';

const alto = Dimensions.get ('window').height
const ancho = Dimensions.get ('window').width

const Todo = () => {
    
    const [view, setView] = useState(false);
    return (
        <View>
        <ScrollView style = {style.scroll}> 
        <TouchableOpacity
        onPress = {() => {setView(true)}}
        >
            <Tarjeta
            imagen = { require ("../images/tarjeta3.png")} tarea = "Aqui va el todo"
            />
        </TouchableOpacity>
        
        </ScrollView>

         <ModalInput view={view}/>

        </View>
    )
}
export default Todo

const style = StyleSheet.create( {
    
    scroll: {
        backgroundColor: "white",
        height: 1000,
        width: 1000,
        position: "absolute",
        marginLeft: 100,
        marginTop: 3,
    },
    text: {
        color: "white",   

    }
})