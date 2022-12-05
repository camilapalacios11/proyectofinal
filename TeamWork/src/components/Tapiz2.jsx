import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import React, {useState} from 'react';
import image from '../images/tapiz1.png'
//import Login from './Login'
//import Registrar from "./Registrar"


const alto = Dimensions.get ('window').height
const ancho = Dimensions.get ('window').width


const Tapiz2 = () => {
    const [botonActivo, setBoton] = useState(1)

    return (

        <View style={style.viewcont}>
            <View>
                <View 
                style = {{
                    backgroundColor: "rgba(247, 242, 201, 0.1)",
                    justifyContent: "center",
                    height: alto /5,
                    width: ancho,
                    shadowColor: "black",
                    shadowOpacity: 0.50,
                    elevation: 2,
                    paddingLeft: 30,
                    fontSize: 30,
                }}>
                    <Text style ={{ fontSize: 30, marginTop: 20 }}>
                    REPERTORIO
                    </Text>

                    <Text style ={{ fontSize: 15}}>
                    Seleccione una tarjeta para 
                    visualizar o editar su contenido
                    </Text>
                </View>

                </View>

                    

               <View style ={style.contenedor}>
                    <TouchableOpacity
                    onPress={()=>setBoton(1)}
                    >
                        <Text style = {[style.tabs, style.letras, botonActivo != 1 && style.tabs_noacti]}>TO DO</Text>
                    </TouchableOpacity> 


                    <TouchableOpacity
                    onPress={()=>setBoton(2)}>
                        <Text style = {[style.tabs, style.letras, botonActivo != 2 && style.tabs_noacti]}>PROCESO</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                    onPress={()=>setBoton(2)}>
                        <Text style = {[style.tabs, style.letras, botonActivo != 3 && style.tabs_noacti]}>PRUEBA</Text>
                    </TouchableOpacity>  


                    <TouchableOpacity
                    onPress={()=>setBoton(2)}>
                        <Text style = {[style.tabs, style.letras, botonActivo != 4 && style.tabs_noacti]}>HECHO</Text>
                    </TouchableOpacity>    
               </View>
               {
                (botonActivo == 1)?
                <Text>
                    todo
                </Text>
                :
                <Login></Login>
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
        width: 100,
        flexDirection: "row",
        height: (alto/5 *4),
        paddingLeft: 0,
    },
    tabs_noacti: {
        backgroundColor: "rgba(2, 38, 73, 0.5)",
    },
    tabs: {
        backgroundColor: "#022649",
        width: 100,
        height:  alto/ 5,
        color: "white",
        textAlign: "center",
    },
    letras:{
        marginBottom: 50,
        marginTop: 100,
        marginLeft: 20,
        color: "white",
        textAlign: "left",
        transform: [{ rotate: '-90deg'}]
    },
})
