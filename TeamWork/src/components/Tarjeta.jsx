import { ImageBackground, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';


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

const style = {
    tarjeta: {
        width: 282,
        height: 139,
        paddingTop: 20,
        paddingLeft: 50,

    }
    
}