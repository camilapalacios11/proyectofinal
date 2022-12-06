import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

import Tarjeta from './Tarjeta';

const alto = Dimensions.get ('window').height
const ancho = Dimensions.get ('window').width

const Proceso = () => {
    return (
        <ScrollView style = {style.scroll}> 
        <Tarjeta imagen = { require ("../images/tarjeta3.png")} tarea = "hacer las tarjetas" />
        </ScrollView>
    )
}
export default Proceso

const style = StyleSheet.create( {
    
    scroll: {
        backgroundColor: "white",
        height: 1000,
        width: 1000,
        position: "absolute",
        marginLeft: 100,
        marginTop: 170 ,
    },
})