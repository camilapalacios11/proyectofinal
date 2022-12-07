import react from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { setStatusBarBackgroundColor } from "expo-status-bar";

const Add =() => {
    return(
        <TouchableOpacity style={styles.boton}>
            <text style={styles.plus}>+</text>
        </TouchableOpacity>
        
    )
}
export default Tapiz2

const styles = StyleSheet.create({

    plus:{
        fontSize: 40,
        color: "white",
        position: "absolute", 
        top: -6,
        left: 9,

    }
    boton: {
        width: 42,
        height: 42,
        borderBottomEndRadius: 21,
        backgroundColor: "black", 
        position: "absolute",
        bottom: 50, 
        right: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    },
  });