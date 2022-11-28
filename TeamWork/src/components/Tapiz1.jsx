import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import image from '../images/tapiz1.png'
import Login from './Login'

const Tapiz1 = () => {
    return (
        <View style={style.viewcont}>
            <ImageBackground source = {image} resizeMode = 'cover' style = {style.papel}>
                <Login></Login>
            </ImageBackground>
        </View>
    )
}
export default Tapiz1

const style = StyleSheet.create( {
    viewcont: {
        flex: 1
    },
    papel: {
        flex: 1, 
        backgroundColor: '#F7F2C9',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
