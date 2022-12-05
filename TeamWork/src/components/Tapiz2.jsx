import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import React, {useState} from 'react';
import { FloatingAction } from "react-native-floating-action";

import Tarjeta from './Tarjeta';

//import Login from './Login'
//import Registrar from "./Registrar"


const alto = Dimensions.get ('window').height
const ancho = Dimensions.get ('window').width


const Tapiz2 = () => {
    const [botonActivo, setBoton] = useState(1)

    return (

        <View style={style.viewcont}>
        
            <View 
            style = {{
                backgroundColor: "rgba(2, 38, 73, 0.22)",
                justifyContent: "center",
                height: alto /5,
                width: ancho,
                shadowColor: "black",
                shadowOpacity: 0.50,
                elevation: 2,
                paddingLeft: 30,
                fontSize: 30,
            }}>
                <Text style ={{ fontSize: 30, marginTop: 30 }}>
                REPERTORIO
                </Text>

                <Text style ={{ fontSize: 15, marginTop: -3}}>
                Seleccione una tarjeta para 
                visualizar o editar su contenido
                </Text>
            </View>

                    

               <View style ={style.contenedor}>
                    <TouchableOpacity
                    onPress={()=>setBoton(1)}
                    >
                        <Text style = {[style.tabs, style.letras, botonActivo == 1 && style.tabs_noacti]}>TO DO</Text>
                    </TouchableOpacity> 


                    <TouchableOpacity
                    onPress={()=>setBoton(2)}>
                        <Text style = {[style.tabs, style.letras, botonActivo == 2 && style.tabs_noacti]}>PROCESO</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                    onPress={()=>setBoton(3)}>
                        <Text style = {[style.tabs, style.letras, botonActivo == 3 && style.tabs_noacti]}>PRUEBA</Text>
                    </TouchableOpacity>  


                    <TouchableOpacity
                    onPress={()=>setBoton(4)}>
                        <Text style = {[style.tabs, style.letras, botonActivo == 4 && style.tabs_noacti]}>HECHO</Text>
                    </TouchableOpacity>    
               </View>

               {
                (botonActivo == 1)?
                <View> 
                    <Tarjeta imagen = { require ("../images/tarjeta1.png")} tarea = "hacer las tarjetas" />
                </View>
                :
                <Text>
                    todo2
                </Text>
               }
        </View>
    )
}
export default Tapiz2

const style = StyleSheet.create( {
    viewcont: {
        flex: 1
    },
    contenedor: {
        width: 50,
        height: 20,
        position: "relative",
    },
    tabs_noacti: {
        borderRightColor: "rgba(2, 38, 73, 0.7)",
        borderBottomWidth: 3
    },
    tabs: {
        backgroundColor: "#FFFFFF",
        width: 80,
        height:  105,
        marginBottom: 50,
        transform: [{ rotate: '-90deg'}]
    },
    letras:{
        color: "black",
        textAlign: "center",
        paddingTop: 50,
        transform: [{ rotate: '-90deg'}]
    },
    scroll: {
        backgroundColor: "pink",
        height: 100,
        width: 100,
    },
})
