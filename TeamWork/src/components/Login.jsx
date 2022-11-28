import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';


const Login = () => {
    return (
        <View>
            <Text>
                CORREO:
            </Text>
            <TextInput>

            </TextInput>
            <Text>
                CONTRASEÑA:
            </Text>
            <TextInput secureTextEntry = {true}>
            </TextInput>
            <Text>
                ENTRAR
            </Text>
        </View>
    )
}
export default Login

const style = StyleSheet.create( {
    viewcont: {
        flex: 1
    },
    papel: {
        flex: 1, 
        backgroundColor: '#F7F2C9',
        alignItems: 'center'
    }
})