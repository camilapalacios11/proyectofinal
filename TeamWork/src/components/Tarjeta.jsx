import { TextInput, ImageBackground, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const alto = Dimensions.get ('window').height
const ancho = Dimensions.get ('window').width

//etiqueta atarjeta



const Tarjeta = (props) => {
    return(
        <ImageBackground 
        source = {props.imagen} resizeMode = 'cover' style = {style.tarjeta}
        >
            <TextInput> {props.tarea} </TextInput>
        </ImageBackground>

        )
}
export default Tarjeta

const style = StyleSheet.create({
    tarjeta: {
        width: 282,
        height: 139,
        paddingTop: 20,
        paddingLeft: 50,
    }

})