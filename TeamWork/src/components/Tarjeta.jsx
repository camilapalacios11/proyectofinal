import {  ImageBackground, Text, StyleSheet } from 'react-native';


//etiqueta atarjeta

const Tarjeta = (props) => {
    return(
        <ImageBackground 
        source = {props.imagen} resizeMode = 'cover' style = {style.tarjeta}
        >
            <Text> {props.tarea} </Text>
        </ImageBackground>

        )
}
export default Tarjeta

const style = StyleSheet.create({
    tarjeta: {
        width: 282,
        height: 145,
        paddingTop: 20,
        paddingLeft: 50,
        marginBottom: 5,
    }

})