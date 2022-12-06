import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import image from '../images/tapiz1.png'
import Login from './Login'
import Registrar from "./Registrar"

const Tapiz1 = () => {
    const [botonActivo, setBoton] = useState(1) 

    return (
        <View style={style.viewcont}>
            <ImageBackground source = {image} resizeMode = 'cover' style = {style.papel}>
               <View style ={style.contenedor}>
                    <TouchableOpacity
                    onPress={()=>setBoton(1)}
                    >
                        <Text style = {[style.tabs, botonActivo != 1 && style.tabs_noacti]}>REGISTRAR</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity
                    onPress={()=>setBoton(2)}>
                        <Text style = {[style.tabs, botonActivo != 2 && style.tabs_noacti]}>ENTRAR</Text>
                    </TouchableOpacity>  
               </View>
               {
                (botonActivo == 1)?
                <Text>
                    <Registrar/>
                </Text>
                :
                <Login></Login>
               }
            </ImageBackground>
        </View>
    )
}
export default Tapiz1

const style = StyleSheet.create( {
    viewcont: {
        flex: 1
    },
    contenedor: {
        width: 305,
        flexDirection: "row",
        marginTop: 50,
    },
    papel: {
        flex: 1, 
        backgroundColor: '#F7F2C9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabs_noacti: {
        backgroundColor: "rgba(2, 38, 73, 0.5)",
    },
    tabs: {
        backgroundColor: "#022649",
        width: 152.5,
        height: 40,
        color: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        textAlign: "center",
        paddingTop: 10,
    }
})
